**PHASE 1: ASSET PREPARATION & BATCHING**
1.1. Group all 256 copy files by Flow (Welcome, Cart, At-Risk, etc.).
1.2. Isolate `design-canvas.jsx` completely from the LLM environment.
1.3. Establish strict JSON output schemas for all LLM prompts.

**PHASE 2: THE ARCHITECT (COMPONENT SELECTION)**
2.1. Input: 1 Copy File + `component-index-v2.md`.
2.2. Extract Metadata (Flow, Position, Level) from copy.
2.3. Map narrative chunks (Hook, Story, Mechanism, Guarantee, Close) to specific Component Categories.
2.4. Filter selections to guarantee exactly 3 to 4 image slots per email.
2.5. Filter selections to ensure vertical color/theme consistency.
2.6. Apply variance protocol (Blacklist components used in the immediate previous email).
2.7. Output: Strict JSON Component Blueprint.

**PHASE 3: ART DIRECTION (IMAGE MAPPING)**
3.1. Audit the JSON Component Blueprint for required image slots.
3.2. Select 3 to 4 assets from the 29-image repository.
3.3. Verify image aspect ratios match the structural constraints of the chosen components.
3.4. Lock exact image file paths into the Blueprint.

**PHASE 4: THE COMPILER (CODE INJECTION)**
4.1. Input: Component Blueprint + Copy File + Image Paths.
4.2. Retrieve raw JSX code blocks exclusively for the selected Component IDs.
4.3. Inject copy text verbatim into JSX text variables.
4.4. Inject image paths into JSX `src` attributes.
4.5. Output: Sequentially stacked JSX code block.

**PHASE 5: CANVAS INTEGRATION & QA**
5.1. Extract the final stacked JSX payload.
5.2. Drop payload directly into the static `design-canvas.jsx` wrapper.
5.3. Audit rendering for broken tags and brand guideline adherence.
5.4. Save finalized email (1 of 127).
5.5. Loop to Phase 2 for the next copy file.

**TASK 1.1: GROUP COPY FILES BY FLOW**

**TARGET DIRECTORY:** `/outputs/copy/` (and all sub-directories)

**EXECUTION LOGIC:**

1. Execute a recursive directory scan of the target directory to extract all 256 `.md` file paths. Ignore directories and non-markdown files.
2. Parse the filenames using regex. The standard naming convention is `[flow_prefix]-[flow_id]-[email_sequence]-[variant].md` (e.g., `welcome-01-e1-gf.md`, `atrisk-23-e1.md`, `mid-13-d30.md`).
3. Categorize each file path into an isolated array based on its `flow_id` and/or `flow_prefix`.

**FLOW MAPPING SCHEMA:**
Map the extracted files into the following explicit arrays based on their string prefix:

* `welcome` -> Welcome Flow (01)
* `cart` -> Cart Abandonment (02)
* `checkout` -> Checkout Abandonment (03)
* `browse` -> Browse Abandonment (04)
* `order` / `shipping` / `ofd` / `arrived` -> Transactional (05-08)
* `upsell` / `ppupsell` -> Upsell Flows (09, 12)
* `detection` -> Level Detection (10)
* `pped` -> PP Education & Extended Ed (11, 22)
* `mid` -> Mid Checkin (13)
* `mary` -> Mary Story (14)
* `repa` / `repb` / `repc` -> Replenishment (15, 16, 17)
* `review` -> Review Request (18)
* `winback-a` / `winback-b` -> Winback (19, 24)
* `site` -> Site Abandonment (20)
* `faq` -> FAQ Library (21)
* `atrisk` -> PP At Risk (23)
* `sunset` -> Sunset (25)

**OUTPUT REQUIREMENT:**
Generate a single JSON manifest file (`flow_batch_manifest.json`) containing the grouped arrays.

**JSON SCHEMA:**

```json
{
  "batches": {
    "welcome_flow": [
      "outputs/copy/welcome/welcome-01-e1-gf.md",
      "outputs/copy/welcome/welcome-01-e1-l1.md"
    ],
    "cart_flow": [
      "outputs/copy/cart/cart-02-e1.md"
    ]
  },
  "metadata": {
    "total_files_indexed": 256,
    "total_flows": 25
  }
}

```

Halt execution after writing the JSON manifest to the filesystem. Do not proceed to the next phase until the batch arrays are confirmed.


**TASK 1.2: ISOLATE MASTER CANVAS ENVIRONMENT**

**TARGET FILES TO BLACKLIST:** `design-canvas.jsx` (and all flow-level `app.jsx` or `.html` wrapper files).

**EXECUTION LOGIC:**

1. Apply a strict read/write lock on `design-canvas.jsx`. Add this exact file path to the operational blacklist for all active sub-agents.
2. Strip all global wrapper context from the sub-agents' working memory. Sub-agents do not need to know how the email renders; they only need to know how to stack the interior JSX components.
3. Block the generation of structural wrapper tags. Sub-agents are explicitly prohibited from outputting `<html>`, `<body>`, `<head>`, or `<EmailTemplate>` tags.
4. Restrict sub-agent write permissions to a dedicated staging directory (e.g., `/outputs/staging_payloads/`). They may only output raw, fragment-wrapped `.jsx` stacks.

**VALIDATION RULE:**
If any sub-agent attempts a file operation (read, write, append, or parse) on `design-canvas.jsx`, terminate the sub-agent process immediately and dump the memory state. The canvas remains strictly untouched until Phase 5.

**TASK 1.3: ENFORCE STRICT JSON OUTPUT SCHEMAS**

**SYSTEM DIRECTIVE:**
All conversational outputs, preambles, and postambles are globally disabled for all sub-agents. Sub-agents must output valid, parsable JSON exclusively. Any generation containing markdown text outside of a code block or conversational filler will trigger an immediate process kill and state reset.

**EXECUTION LOGIC:**

1. Inject a strict schema definition into the system prompt of every sub-agent prior to dispatch.
2. Force the model output format to JSON mode.
3. Validate every sub-agent response against its designated JSON schema using a validation script. If parsing fails, do not attempt self-correction via prompt loop; log the error and halt the specific email generation to protect API rate limits.

**REQUIRED SCHEMAS TO INITIALIZE:**

**Schema A: Phase 2 Architect Blueprint**
Must be used by the Component Architect to map the email structure.

```json
{
  "email_id": "string (e.g., checkout-03-e2)",
  "flow_type": "string",
  "total_image_slots_required": "number (Must be 3-4)",
  "blueprint": [
    {
      "position": "number (e.g., 1)",
      "category": "string (e.g., SHELL & HEADER)",
      "component_id": "string (e.g., UTIL-08)",
      "reasoning": "string (Max 1 sentence)",
      "contains_image_slot": "boolean"
    }
  ]
}

```

**Schema B: Phase 3 Art Direction Map**
Must be used by the Image Mapper to assign specific assets to the blueprint.

```json
{
  "email_id": "string",
  "image_assignments": [
    {
      "component_id": "string (Matching an ID from Schema A)",
      "image_path": "string (e.g., lifestyle/toddler-livingroom-dino-yellow.png)",
      "aspect_ratio_match": "boolean (Must be true)"
    }
  ]
}

```

**Schema C: Phase 4 Compiler Output**
Must be used by the Code Stitcher to return the final payload location.

```json
{
  "email_id": "string",
  "status": "string (SUCCESS or FAIL)",
  "compiled_jsx_path": "string (e.g., /outputs/staging_payloads/checkout-03-e2-compiled.jsx)",
  "error_log": "string (Null if successful)"
}

```

Lock these schemas into the system registry. Proceed to Phase 2 only when schemas are bound to their respective sub-agent profiles.

**TASK 2.1: ISOLATE AND INGEST PHASE 2 INPUTS**

**TARGET FILES:** Next `[target_copy_file.md]` in queue + `component-index-v2.md`.

**EXECUTION LOGIC:**

1. Pull the next unprocessed `.md` copy file from the active array generated in the `flow_batch_manifest.json` queue (e.g., `checkout-03-e2.md`).


2. Execute a raw read of the complete plaintext contents of the selected copy file.
3. Execute a raw read of the complete plaintext contents of `component-index-v2.md`.


4. Initialize the Component Architect Sub-Agent.
5. Inject **only** these two text payloads into the sub-agent's isolated context window. Do not load any image files, HTML wrappers, previous generations, or sub-directories into this specific context window to prevent token overflow.

**VALIDATION RULE:**
Verify the injected component index string contains the complete catalog of 950 components mapped by email position (from "1. SHELL & HEADER" to "13. SIGNOFF & FOOTER"). If the context window truncates the index due to token limits, halt execution.

**TASK 2.2: EXTRACT METADATA (FLOW, POSITION, LEVEL)**

**TARGET DATA:** The header block of the ingested `.md` copy file (e.g., lines prefixed with `>` at the top of the file).

**EXECUTION LOGIC:**

1. Scan the top 20 lines of the active copy file to locate the metadata header block.
2. Execute regex or key-value extraction for the following required variables:
* `Flow`: Extract the flow name and ID (e.g., "Checkout Abandonment (Flow 03)").


* `Position`: Extract the sequence identifier (e.g., "E2").


* `Level Scope`: Extract the target avatar level (e.g., "L1 + L2 + L3 + GF" or "L1").




3. Store these extracted variables in temporary sub-agent memory.

**METADATA UTILIZATION RULE:**
The extracted `Level Scope` must dictate the subsequent component filtering in Step 2.3.

* If `Level Scope` contains "L1", "L2", or "L3", prioritize components tailored to those specific avatars (e.g., `PERS-01` [A*] — Level Greeting).


* If `Level Scope` is "Cross-Level" or "GF", strictly ban level-specific components and select universal, cross-level safe components.
* The `Flow` and `Position` variables must be used to validate the selection of Flow-Specific Patterns (e.g., restricting Cart components to Cart flows).

**OUTPUT REQUIREMENT:**
Append the extracted metadata to the root of the Phase 2 Architect JSON payload (Schema A).

```json
{
  "email_id": "checkout-03-e2",
  "flow_type": "Checkout Abandonment",
  "position": "E2",
  "level_scope": "L1 + L2 + L3 + GF",
  "blueprint": []
}

```



**TASK 2.3: NARRATIVE CHUNKING AND CATEGORY MAPPING**

**TARGET DATA:** The primary text body of the ingested `.md` copy file and the category headers within `component-index-v2.md`.

**EXECUTION LOGIC:**

1. Parse the main body of the copy file sequentially from top to bottom.
2. Segment the text into discrete functional chunks based on narrative intent (e.g., Hook/Opener, Empathy/Validation, Mechanism Explanation, Social Proof, Risk Reversal/Guarantee, Call to Action, Sign-off).
3. Apply a strict cross-reference lock. For each identified chunk, the sub-agent must restrict its component search **exclusively** to the corresponding structural category in `component-index-v2.md`.



**STRICT MAPPING MATRIX:**
The sub-agent must route copy chunks to component index categories using this exact matrix:

* **Copy Intent: Hook / Opening Statement** → Route to: `2. HERO`.


* **Copy Intent: Validation / Empathy / Narrative Story** → Route to: `3. BODY — RECOGNITION & STORY`.


* **Copy Intent: Science / How it Works / Education** → Route to: `4. BODY — MECHANISM & EDUCATION`.


* **Copy Intent: Reviews / Quotes / Star Ratings** → Route to: `5. BODY — SOCIAL PROOF & TESTIMONIALS`.


* **Copy Intent: Risk Reversal / 60-Day Refund Policy** → Route to: `8. GUARANTEE & TRUST`.


* **Copy Intent: Call to Action / Button Text** → Route to: `9. CTA — THE CLOSE`.


* **Copy Intent: Emotional Support / Permission** → Route to: `10. EMOTIONAL SUPPORT`.


* **Copy Intent: Signature / P.S. Lines** → Route to: `13. SIGNOFF & FOOTER`.



**VALIDATION RULE:**
The sub-agent is explicitly forbidden from crossing categories. If a text chunk contains a guarantee, it must not be mapped to a component in the `HERO` or `BODY — RECOGNITION & STORY` categories. The sub-agent must select a component ID strictly from the `GUARANTEE & TRUST` section. Failure to adhere to the mapping matrix invalidates the blueprint.


**TASK 2.4: ENFORCE IMAGE QUOTA FILTER**

**TARGET VARIABLES:** `total_image_slots_required` (Must equal exactly 3 or 4).

**EXECUTION LOGIC:**

1. Maintain a running integer count of the total number of image slots allocated across the active blueprint array.


2. Track the image properties of each chosen component ID using the metadata provided in `component-index-v2.md`. Components designated with image requirements (e.g., `FLOWIMG-001`, `IMG-06`, `SP-09`) automatically increment the blueprint's image slot counter. Text-only components (e.g., `4.1`, `4.3`, `CC4`) register as zero image slots.


3. Execute a predictive validation scan on the current candidate sequence. If the cumulative component choices result in fewer than 3 or more than 4 total image placeholders, trigger a fallback re-evaluation rule.



**FALLBACK ADJUSTMENT RULES:**

* **Deficit Rule (Under 3 slots):** If the natural copy chunk mapping results in fewer than 3 image slots, the agent must systematically replace a selected text-only body component with a layout-equivalent component that contains an image frame (e.g., swapping a plain text block for `LETTER-04` [G+] Letter + Image Break). Alternatively, the agent must insert a dedicated placeholder from the `6. BODY — IMAGES & PHOTOS` category as a structural visual breaker.


* **Surplus Rule (Over 4 slots):** If the component choices exceed 4 image slots, the agent must replace a hybrid image+text component with a pure-text variation from the same logical category (e.g., swapping `HERO-20` for a text-only alternative) until the tally drops to the mandatory range.

**OUTPUT REQUIREMENT:**
The root JSON key `total_image_slots_required` must match the actual count of true items in the blueprint array.

```json
{
  "total_image_slots_required": 3,
  "blueprint": [
    { "component_id": "UTIL-08", "contains_image_slot": false },
    { "component_id": "FLOWIMG-006", "contains_image_slot": true },
    { "component_id": "IMG-06", "contains_image_slot": true },
    { "component_id": "12.1", "contains_image_slot": true }
  ]
}

```

**TASK 2.5: VERTICAL THEME & COLOR CALIBRATION**

**TARGET DATA:** Section color attributes in `component-index-v2.md` and the total layout matrix of the blueprint.

**EXECUTION LOGIC:**

1. Scan the background colors and design styling of each selected candidate component within the blueprint sequence.


2. Track the active color token and padding rules for each component layer as it stacks vertically from Header to Signoff.


3. Validate that the stacked components establish a clean, deliberate narrative transition (e.g., matching the multi-section journey layout rule: Cream $\rightarrow$ Warm $\rightarrow$ Teal $\rightarrow$ Warm $\rightarrow$ Purple $\rightarrow$ Dark).


4. Prevent disjointed color clashes by running a continuous checker on adjacent components.

**THEME CONSISTENCY RULES:**

* **Contrast Transitions:** If a component with a heavy background color is selected (e.g., `26.2 Full-Width Color Block Sections`), the immediately following component must have a flat, matching, or transparent backdrop, or utilize a specific structural transition like `20.1 Wave Divider` or `20.3 Gradient Band Variants` to smooth out the edge.


* **Flow/Avatar Alignment:** Ensure the component theme aligns perfectly with the metadata extracted in Task 2.2. For example, if compiling a high-objection/conversion flow like `checkout-03-e2`, strictly avoid neon elements on dark unless specifically allowed; default to the authentic, clean editorial layouts (e.g., `23.1 Magazine Masthead`, `23.3 Editorial Pull Quote`).


* **Visual Balance:** Ensure a text-heavy structural section (like a `4.1 Letter Section`) is never wedged between two matching high-density background section blocks without an inline color-softener or padding primitive to keep the visual flow scannable.



**VALIDATION RULE:**
If the selection sequence creates an unapproved, sudden jump between conflicting section styles—such as an un-spaced transition from raw white to a full-bleed block—the agent must immediately replace the downstream component with a matching color variant or insert an approved `20.3 Gradient Band Variant` into the JSON array to maintain flawless vertical symmetry.

**TASK 2.6: VARIANCE PROTOCOL AND HISTORICAL BLACKLISTING**

**Operational Objective**: Prevent consumer desensitization and visual fatigue by ensuring consecutive emails do not reuse identical component layouts or matching structural block combinations.

**EXECUTION LOGIC:**

1. Determine the immediate previous email file processed in the current execution queue by reading the sequential array index positions in `flow_batch_manifest.json`.
2. Locate and open the finalized JSON Component Blueprint file (`Schema A`) generated for that previous email.
3. Extract all string values from the `component_id` keys inside that previous blueprint array.
4. Construct an active runtime `blacklist` array containing those extracted component IDs.
5. During the current execution of Task 2.3 (Index Matching) and Task 2.4 (Image Quota Filter), parse the candidate options within `component-index-v2.md`. Cross-reference every candidate ID against the active `blacklist` array.


6. If a component ID is present in the `blacklist` array, strip it from the available selection pool for the current email. The selection mechanism must choose the next highest-ranking, non-blacklisted alternative within the restricted category column.



**EXCEPTION & FALLBACK RULES:**

* **Immutable Bookends Exception:** Do not apply the variance blacklist to globally mandatory components where only one approved structural asset exists in the index (e.g., `UTIL-08 Nav Bar`, `26.5 Dark Footer Bar` if no other footer options are available).


* **Zero-Alternative Fallback:** If a specific category section within `component-index-v2.md` contains zero un-blacklisted alternative components that match the current copy chunk's length or layout requirements, clear the blacklist for that specific category slot only. Select the best matching asset, log a `variance_bypass` warning in the blueprint metadata, and continue execution.



**OUTPUT REQUIREMENT:**
The validation checker must confirm that no component ID (outside of approved global bookends) matches the previous email's JSON map. Lock the final choices into the current blueprint payload.


**TASK 2.7: OUTPUT STRICT JSON COMPONENT BLUEPRINT**

**Operational Objective**: Serialize the fully filtered, validated, and cross-referenced vertical component stack into a single, production-ready JSON document.

**EXECUTION LOGIC:**

1. Collect the final arrays from Tasks 2.2 through 2.6 stored in temporary sub-agent memory.
2. Structure the payload to match the exact keys defined in `Schema A` (Task 1.3).
3. Validate that the root-level metadata (`email_id`, `flow_type`, `position`, `level_scope`) perfectly mirrors the raw variables extracted from the source copy header.


4. Run a final array sanity check: Ensure no component IDs outside of approved bookends match the immediate previous email map (Task 2.6), and confirm the `total_image_slots_required` integer equals the true count of blocks marked `contains_image_slot: true`.


5. Disable all markdown code block encapsulation (such as backticks or ````json` wrapper markers) if outputting directly via an API stream or isolated file-write action.
6. Write the finalized string payload directly to the local filesystem at the explicit destination path: `/outputs/blueprints/[email_id]_blueprint.json`.



**EXACT TARGET BLUEPRINT SCHEMA (EXAMPLE FOR CHECKOUT-03-E2):**

```json
{
  "email_id": "checkout-03-e2",
  "flow_type": "Checkout Abandonment",
  "position": "E2",
  "level_scope": "L1 + L2 + L3 + GF",
  "total_image_slots_required": 4,
  "blueprint": [
    {
      "position": 1,
      "category": "SHELL & HEADER",
      "component_id": "UTIL-08",
      "reasoning": "Standard global Nav Bar for flow consistency.",
      "contains_image_slot": false
    },
    {
      "position": 2,
      "category": "HERO",
      "component_id": "HERO-3",
      "reasoning": "Permission Open layout handles the validation hook and direct skeletal text.",
      "contains_image_slot": false
    },
    {
      "position": 3,
      "category": "BODY — RECOGNITION & STORY",
      "component_id": "STORY-10",
      "reasoning": "Stacked Story configuration cleanly isolates the three separate parent vignettes.",
      "contains_image_slot": false
    },
    {
      "position": 4,
      "category": "BODY — IMAGES & PHOTOS",
      "component_id": "IMG-06",
      "reasoning": "Before/After Split injects required image frames to maintain flow visual density.",
      "contains_image_slot": true
    },
    {
      "position": 5,
      "category": "BODY — MECHANISM & EDUCATION",
      "component_id": "EDU-10",
      "reasoning": "How It Works blocks structure the signal-timing gap paragraph.",
      "contains_image_slot": false
    },
    {
      "position": 6,
      "category": "GUARANTEE & TRUST",
      "component_id": "10.1",
      "reasoning": "60-Day Seal component acts as the dedicated container for risk-reversal text.",
      "contains_image_slot": true
    },
    {
      "position": 7,
      "category": "CTA — THE CLOSE",
      "component_id": "CC4",
      "reasoning": "Soft Close CTA provides a non-pressuring link for checkout recovery.",
      "contains_image_slot": false
    },
    {
      "position": 8,
      "category": "SIGNOFF & FOOTER",
      "component_id": "12.1",
      "reasoning": "Lena Signoff component houses personal signoff, avatar frame, and P.S. lines.",
      "contains_image_slot": true
    },
    {
      "position": 9,
      "category": "SIGNOFF & FOOTER",
      "component_id": "26.5",
      "reasoning": "Dark Footer Bar structures the mandated operational and legal links.",
      "contains_image_slot": false
    }
  ]
}

```

**HALT LOGIC:**
Once the file-write confirmation is registered by the OS file handle, terminate the Phase 2 sub-agent process completely. Do not append any trailing execution text or diagnostic commentary. Freeze environmental state and await instructions for Phase 3.

```

```

**TASK 3.1: AUDIT THE JSON COMPONENT BLUEPRINT FOR REQUIRED IMAGE SLOTS**

**Operational Objective**: Parse the newly generated Phase 2 blueprint file, detect every structural layout block that requires a visual asset, and establish a temporary runtime registry of open image slots ready for asset assignment.

**EXECUTION LOGIC:**

1. Locate and parse the target JSON blueprint document matching the current execution file handle from `/outputs/blueprints/[email_id]_blueprint.json`.
2. Extract the root-level metadata property `total_image_slots_required`. Check that this value falls strictly between 3 and 4 inclusive. If the value is less than 3 or greater than 4, flag a configuration failure and terminate the run.
3. Perform a sequential loop through the `blueprint` array block by block.
4. Evaluate the boolean property `contains_image_slot` for each component entry.
5. Filter and capture every component entry where `contains_image_slot` evaluates to `true`. For every matching entry, extract the following specific parameters:
* `position`
* `component_id`
* `category`


6. Compile these targeted parameters into a structural memory manifest array named `open_image_slots`.

**VALIDATION REQUIREMENT:**
Execute a count calculation on the final `open_image_slots` array. The array length must exactly match the integer value defined in `total_image_slots_required`.

**INTERNAL REGISTRY STRUCTURE (TEMPORARY RUNTIME MANIFEST):**

```json
{
  "email_id": "checkout-03-e2",
  "expected_slots": 4,
  "open_image_slots": [
    { "position": 4, "component_id": "IMG-06", "category": "BODY — IMAGES & PHOTOS" },
    { "position": 6, "component_id": "10.1", "category": "GUARANTEE & TRUST" },
    { "position": 8, "component_id": "12.1", "category": "SIGNOFF & FOOTER" }
  ]
}

```

*Note: If the component schema implicitly demands an asset that was omitted from the blueprint array flag, the pipeline must break execution instantly.*

Keep this registry locked in memory. Proceed directly to Task 3.2 without changing file systems.

**TASK 3.2: SELECT ASSETS FROM REPOSITORY**

**TARGET DIRECTORY:** `/assets/images/` (The 29-image repository manifest).

**EXECUTION LOGIC:**

1. Read the `open_image_slots` manifest generated in Task 3.1 to identify the specific components requiring visual assets.
2. Cross-reference the active copy file context (e.g., flow type, narrative topic) against the image metadata tags in the 29-image repository.
3. Systematically match and allocate image assets to the open slots based on deterministic category routing rules.

**ASSET CATEGORY ROUTING RULES:**

* **Sign-off Component Slots (e.g., Component `12.1`):** Strictly bypass general lifestyle pools. Force-assign the specific team headshot asset (e.g., `avatars/lena-headshot.png`).
* **Trust/Guarantee Component Slots (e.g., Component `10.1`):** Strictly bypass product and lifestyle pools. Force-assign the explicit trust seal graphic asset (e.g., `badges/60-day-guarantee-seal.png`).
* **Hero / Product Display Slots (e.g., Component `FLOWIMG-006`):** Force-assign a primary conversion asset, prioritizing clear product packshots, unboxings, or multi-pack layouts (e.g., `products/bundle-main-transparent.png`).
* **Body Narrative / Inline Breaker Slots (e.g., Component `IMG-06`):** Extract the sentiment of the adjacent text chunk.
* If the copy discusses daily routine chaos or emotional strain, assign a contextual lifestyle asset (e.g., `lifestyle/toddler-livingroom-dino-yellow.png`).
* If the copy discusses product components or tangible materials, assign an artistic flat-lay asset (e.g., `flatlays/kit-spread-overhead.png`).



**ANTI-DUPLICATION CONSTRAINT:**
The selection engine is strictly forbidden from assigning the exact same image asset path to more than one slot within the same single email execution blueprint. Every assigned path in the current active stack must be unique.

**OUTPUT REQUIREMENT:**
Append the candidate asset paths to the active `open_image_slots` memory array and pass the data directly to Task 3.3 for physical ratio verification. Do not write to disk yet.


**TASK 3.3: ASPECT RATIO VERIFICATION PROTOCOL**

**TARGET DATA:** Structural component specs in `component-index-v2.md` and the physical dimensions metadata of the 29-image repository.

**EXECUTION LOGIC:**

1. Fetch the geometric constraint tokens for each `component_id` mapped in the active blueprint array.
2. Match those component IDs against their strict layout requirements:
* **Avatar Frames (e.g., `12.1`):** Mandates a `SQUARE_1X1` aspect ratio constraint.
* **Trust/Guarantee Stamps (e.g., `10.1`):** Mandates a `SQUARE_1X1` or `ICON_FIXED` constraint.
* **Hero Banners / Openers (e.g., `FLOWIMG-001`):** Mandates a `LANDSCAPE_16X9` or `LANDSCAPE_3X2` constraint.
* **Split Grids / Dual Cards (e.g., `IMG-06`):** Mandates a matching pair of `SQUARE_1X1` or `PORTRAIT_4X5` constraints.


3. Query the image file properties or the system asset manifest to extract the true pixel width and height of the candidate paths chosen in Task 3.2. Calculate the ratio ($Width / Height$).
4. Cross-verify the calculated ratio against the component constraint token. Allow a maximum variation tolerance of $\pm 5\%$.

**MISMATCH CORRECTIVE ACTION (FALLBACK):**
If a component requires a `LANDSCAPE_16X9` banner but Task 3.2 assigned a vertical portrait image (e.g., `lifestyle/toddler-standing-9x16.png`), flag an aspect ratio violation.

* **Action:** Do not alter the component blueprint. Immediately discard the invalid asset.
* **Resolution:** Re-query the image repository pool for that specific category. Pull the next highest-ranking asset that satisfies both the narrative intent and the matching layout aspect ratio.
* **Hard Termination:** If no asset in the remaining repository fits the physical structural slot, abort the entire email pipeline run, throw a structural dimension mismatch error, and log the asset bottleneck.

**VALIDATION RULE:**
Every image assignment block in memory must pass with an internal property value of `"aspect_ratio_match": true` before moving to the file serialization layer. Proceeding with a mismatched ratio token is an automatic fail.


**TASK 3.4: LOCK EXACT IMAGE FILE PATHS INTO THE BLUEPRINT**

**Operational Objective**: Serialize the validated, ratio-matched asset mappings into a permanent, unalterable JSON Art Direction Map file, closing the visual selection layer.

**EXECUTION LOGIC:**

1. Collect the final array from Task 3.3 currently held in temporary runtime memory.
2. Structure the payload to conform strictly to the properties defined in **Schema B: Phase 3 Art Direction Map** (Task 1.3).
3. Validate each file path string. Ensure paths are absolute relative to the asset root folder and retain their correct file extensions (e.g., `.png`, `.jpg`). They must match the naming syntax of the repository exactly (e.g., `lifestyle/toddler-livingroom-dino-yellow.png`).
4. Ensure the property value `"aspect_ratio_match"` is hardcoded to `true` for all entries. Any entry containing a `false` or null value must trigger a rollback to Task 3.3.
5. Disable all conversational text, explanations, markdown formatting, or code block encapsulation if streaming or writing via direct file system hooks.
6. Write the finalized JSON document to the designated folder path: `/outputs/art_direction/[email_id]_art_direction.json`.

**EXACT TARGET ART DIRECTION MAP SCHEMA (EXAMPLE FOR CHECKOUT-03-E2):**

```json
{
  "email_id": "checkout-03-e2",
  "image_assignments": [
    {
      "component_id": "IMG-06",
      "image_path": "lifestyle/toddler-livingroom-dino-yellow.png",
      "aspect_ratio_match": true
    },
    {
      "component_id": "10.1",
      "image_path": "badges/60-day-guarantee-seal.png",
      "aspect_ratio_match": true
    },
    {
      "component_id": "12.1",
      "image_path": "avatars/lena-headshot.png",
      "aspect_ratio_match": true
    }
  ]
}

```

**HALT LOGIC:**
Verify the file handle is closed by the operating system. Once confirmation is received, flush the runtime cache for the Image Mapper sub-agent and terminate the process. Do not output any log commentary or summary descriptions. Await instructions for Phase 4.

**TASK 4.1: COMPILER INPUT INGESTION & COHERENCE CHECK**

**TARGET INPUTS:**

* Blueprint JSON: `/outputs/blueprints/[email_id]_blueprint.json`
* Art Direction JSON: `/outputs/art_direction/[email_id]_art_direction.json`
* Source Copy Markdown: `/outputs/copy/.../[email_id].md`

**EXECUTION LOGIC:**

1. Parse the primary target execution handle to extract the active `email_id` (e.g., `checkout-03-e2`).
2. Execute a synchronized system read command to pull the three distinct dependency payloads from their respective file system paths.
3. Run an internal validation checker to enforce **id-coherence**:
* Verify the `email_id` string at the root of the Blueprint JSON matches the active file handle.
* Verify the `email_id` string at the root of the Art Direction JSON matches the active file handle.
* Confirm the Source Copy file name matches the active file handle exactly.


4. If an identity mismatch is detected across any of the three paths, abort the execution branch immediately and log a fatal ingestion dependency failure. Do not proceed to processing if file linkage is broken.
5. Initialize the Compiler Sub-Agent context window.
6. Inject the raw text blocks of all three parsed files into the compiler's temporary operating memory as a unified text reference node.

**CONTEXT ISOLATION DIRECTIVE:**
Do not load any global style files, directory maps, structural canvas elements, or historical logs into this workspace. The compiler context must remain strictly restricted to these three explicit inputs to optimize token efficiency and prevent code hallucination.

**VALIDATION RULE:**
Confirm that every `component_id` flagged with an image asset inside the Art Direction JSON map physically exists within the active structural array of the Component Blueprint JSON. If the asset allocation points to a component missing from the structural layout, halt operation immediately.


**TASK 4.2: EXCLUSIVE JSX CODE RETRIEVAL**

**TARGET SOURCE:** `/src/components/` (The repository directory containing individual component `.jsx` files or the core layout definition catalog).

**EXECUTION LOGIC:**

1. Read the finalized `blueprint` array from the validated Phase 2 JSON payload.
2. Iterate sequentially through the array to extract every target string value found under the `component_id` key (e.g., `UTIL-08`, `HERO-3`, `IMG-06`, `12.1`).
3. Execute a targeted file-read operation to locate the exact code block corresponding to each extracted ID.
4. Extract **only** the self-contained functional JSX element or component block bounded by the component's identifier.

**EXTRACTION CONSTRAINTS:**

* **Zero-Generation Isolation:** The compiler is strictly prohibited from writing new code, changing existing HTML/JSX tags, or modifying Tailwind CSS classes during retrieval. It acts purely as a mechanical file finder and string extractor.
* **Token Boundary Enforcement:** Do not ingest or parse the entire component library catalog file at once. Isolate and pull only the specific blocks requested by the blueprint into active scratchpad memory registers to minimize token consumption.
* **Strip Global Definitions:** Do not import or carry over top-level global file imports (such as `import React from 'react'`), style declarations, or trailing export statements (`export default...`) into the staging workspace. Extract only the interior layout tree.

**VALIDATION RULE:**
Confirm that every retrieved JSX block is structurally intact and contains the precise placeholder variable markers or comment flags (e.g., `{props.text_hook}`, `{props.image_src}`, or `<!-- INJECT_TEXT -->`) required for the next phase. If a retrieved component string is empty, missing, or malformed, halt the pipeline immediately and log a missing component asset exception.

**TASK 4.3: VERBATIM COPY INJECTION INTO JSX VARIABLES**

**Operational Objective**: Line up the parsed narrative text chunks from the source copy file directly into their designated structural variable fields or props within the retrieved JSX components without a single character alteration.

**EXECUTION LOGIC:**

1. Scan each retrieved JSX component block to locate its internal text properties, component props, or inline placeholder tokens (e.g., `{props.title}`, `{props.bodyText}`, `{headline}`, or explicit commented injection boundaries like ``).
2. Isolate the corresponding text segment from the source copy Markdown file based on the narrative chunk mapping matrix locked in during Task 2.3.
3. Perform a clean string replacement operation, swapping out the placeholder token and injecting the raw copy text verbatim into the JSX element tree or variable definition.

**STRICT STRING SANITIZATION AND ESCAPING RULES:**

* **Apostrophes & Quotes:** Escape all raw apostrophes (`'`) and double quotes (`"`) if injecting into standard JSX string attributes to prevent syntax breakage. Alternatively, encapsulate the entire text block inside JSX curly brace expressions using template literals or string literals (e.g., `{"verbatim text here"}`).
* **Line Breaks & Paragraphs:** Convert double line breaks (`\n\n`) within a single Markdown copy block into separate structural paragraph tags (`<p className="...">...</p>`) or inject self-closing line breaks (`<br />`), strictly adhering to the pre-existing utility layout of the parent component.
* **Inline Typography Formatting:** Parse and map inline Markdown styling directly into valid inline JSX tags:
* `bold text` -> `<strong>bold text</strong>`
* `*italic text*` -> `<em>italic text</em>`


* **Zero-Alteration Enforcement:** The compiler is strictly banned from editing text. Do not correct spelling mistakes, do not fix grammatical errors, do not optimize punctuation, and do not truncate sentences. The output string inside the JSX block must be a mirror copy of the input Markdown chunk.

**VALIDATION RULE:**
Run a string comparison audit between the injected JSX text nodes and the source Markdown file chunks. If the text content fails a character-for-character match (excluding applied syntax escaping), the compilation step fails instantly. Abort the run and log a text corruption exception.

**TASK 4.4: INJECT IMAGE PATHS INTO JSX SRC ATTRIBUTES**

**Operational Objective**: Map the validated image file paths from the Art Direction Map directly into the corresponding image `src` fields of the retrieved JSX components without altering structural styles or dimensions.

**EXECUTION LOGIC:**

1. Parse the `image_assignments` array from the validated Art Direction JSON file (`/outputs/art_direction/[email_id]_art_direction.json`).
2. Match each `component_id` entry containing an active assignment to its corresponding JSX layout tree block currently held in the compiler's scratchpad memory.
3. Execute a targeted string or AST scan on the JSX block to locate the precise structural image elements (e.g., standard `<img />` tags or custom `<Image/>` rendering wrappers).
4. Identify the active source property variable or attribute, specifically targeting `src="..."`, `src={...}`, or local assignment placeholders like `imgSrc`.
5. Execute a direct string injection, replacing the mock asset placeholder with the absolute relative file path specified in the JSON map (e.g., `/assets/images/lifestyle/toddler-livingroom-dino-yellow.png`).

**STRICT ASSET INSERTION RULES:**

* **Alt Property Enforcement:** For every `src` attribute populated, locate or initialize the corresponding accessibility `alt` attribute. Populate the `alt` string with clean, descriptive metadata derived from the asset configuration or the adjacent header context. Never output an image tag with a missing or undefined `alt` property.
* **Preserve Layout Integrity:** The compiler is strictly prohibited from touching, modifying, or deleting structural properties bound to the image container. Elements such as `className`, `width`, `height`, `loading`, or Tailwind layout primitives (e.g., `aspect-[4/3]`, `object-cover`) must remain completely unaltered.
* **Path Reference Safety:** Ensure the final string format exactly matches the structural loading requirements of the frontend framework. Do not append trailing backslashes, escape sequences, or unapproved directory variables that break path resolution.

**VALIDATION RULE:**
Perform a final code scan on the component sequence before merging. Every layout component flagged as `contains_image_slot: true` must possess a non-empty, fully resolved `src` attribute value pointing to a real asset directory path. If any image tag defaults back to a placeholder string, or remains empty, kill the compilation thread immediately and dump the target component state.

**TASK 4.5: SEQUENTIAL STACKING AND FINAL JSX SERIALIZATION**

**Operational Objective**: Assemble the fully populated, text-injected, and asset-mapped JSX components into a single, cohesive, vertical code document, maintaining the architectural order defined in the Phase 2 Blueprint.

**EXECUTION LOGIC:**

1. **Ordering Enforcement**: Retrieve the `blueprint` array from the validated JSON file. Iterate strictly through the `position` index (1 through N).
2. **Buffer Stacking**: For each `position` index, fetch the now-fully-injected JSX block from the compiler’s scratchpad memory.
3. **Sequence Consolidation**: Append each component string to a master output buffer.
4. **Structural Wrapper Verification**:
* Do **not** wrap the final output in `<html>` or `<body>` tags (this violates Phase 1.2 isolation).
* Do **not** introduce global import statements or top-level `export` declarations.
* The resulting document must be a pure, functional JSX component fragment array (or a single `<div>` wrapper containing the vertical stack) ready for insertion into the `design-canvas.jsx` host environment.


5. **Syntax Sanitization**: Perform a final pass to ensure that no `className` attributes are malformed and that all JSX curly-brace logic (e.g., `{props.x}`) is balanced.

**FINAL OUTPUT FORMAT:**
The compiler shall output the code as a clean block of code.

```jsx
{/* Component Position 1: UTIL-08 */}
<NavGlobal />

{/* Component Position 2: HERO-3 */}
<HeroLayout text={props.hook} />

{/* Component Position 3: STORY-10 */}
<StoryContainer body={props.story} />

{/* Component Position 4: IMG-06 */}
<ImageSplitter src="/assets/images/lifestyle/toddler-livingroom-dino-yellow.png" alt="Contextual lifestyle detail" />

{/* ...[Remaining stack positions 5-N]... */}

{/* Component Position 9: 26.5 */}
<FooterBar />

```

**VALIDATION RULE:**
The compiler must perform a final length check against the Blueprint array length. If the compiled code block does not contain exactly the number of components specified in the original blueprint, or if a component index is skipped, the output is considered invalid.

**FINALIZATION:**
Write the finalized JSX fragment string to the production path: `/outputs/staging_payloads/[email_id]_final_render.jsx`. Once the write confirmation is received, clear all staging memories, trigger the `SUCCESS` status in the Final Status Register, and shut down the Compiler Sub-Agent.

---

**TASK 5.1: EXTRACT THE FINAL STACKED JSX PAYLOAD**

**Operational Objective**: Securely retrieve the fully compiled, text-injected, and asset-mapped JSX fragment stack from the isolated staging directory into active memory, verifying its structural readiness for master canvas integration.

**TARGET PATH:** `/outputs/staging_payloads/[email_id]_final_render.jsx` (Generated in Task 4.5).

**EXECUTION LOGIC:**

1. Initialize the Phase 5 Master Integration Sub-Agent.
2. Read the active execution handle to identify the target `email_id` currently queued for final rendering.
3. Target the explicit file system path: `/outputs/staging_payloads/[email_id]_final_render.jsx`.
4. Execute a strict, read-only extraction command. Pull the complete plaintext contents of the file directly into a dedicated runtime memory register (`payload_buffer`).
5. Strip any residual markdown code block wrappers (e.g., `jsx ... `), hidden Unicode characters, or anomalous whitespace that may have been appended during the OS file-write process.
6. Maintain absolute encapsulation. The system must treat this extracted payload purely as a string-based text fragment. Do not attempt to execute, compile, evaluate, or wrap the code during this extraction step.

**PAYLOAD SANITIZATION & INTEGRITY CHECK:**
Before the payload can be cleared for injection, the Sub-Agent must perform a surface-level syntax audit on the `payload_buffer` string:

* **Bracket Balancing:** Execute a fast regex sweep to confirm that all opening JSX brackets (`<`), curly braces (`{`), and parentheses (`(`) have corresponding closing markers.
* **Missing Asset Flags:** Scan for residual `undefined`, `null`, or empty `src=""` string patterns that may have bypassed Phase 4 validation.
* **Fragment Verification:** Ensure the payload remains a raw vertical stack or is wrapped in a single, valid `<React.Fragment>` or `<div>`. It must explicitly *not* contain `<html>`, `<body>`, or `<!DOCTYPE>` tags.

**VALIDATION RULE:**
If the extracted payload file is missing, size-zero, or fails the bracket-balancing integrity check, the payload is compromised.

* **Action:** Trigger a `CRITICAL_PAYLOAD_CORRUPTION` error.
* **Resolution:** Halt Phase 5 immediately. Do not lift the security lock on the Master Canvas. Flag the `email_id` in the system log for manual developer intervention and proceed to the next email in the batch queue.

```

```

**TASK 5.2: INJECT PAYLOAD INTO THE DESIGN-CANVAS.JSX WRAPPER**

**Operational Objective**: Mechanically fuse the validated, extracted JSX component stack into the static canvas wrapper file (`design-canvas.jsx`), establishing the complete runtime React component layout necessary for final rendering.

**TARGET FILES:**

* Source Payload: `payload_buffer` (Extracted in Task 5.1)
* Static Host Template: `/src/templates/design-canvas.jsx`
* Target Output Path: `/outputs/final_canvases/[email_id]_canvas_integrated.jsx`

**EXECUTION LOGIC:**

1. Open the static layout template wrapper file at `/src/templates/design-canvas.jsx` in read-only memory. This wrapper contains the foundational shell configuration, including outer width locks (e.g., `max-w-[600px]`), global font-family injection tokens, standard reset wrapper styles, and background padding rules.
2. Locate the unique, pre-configured injection marker string inside the wrapper layout tree. This marker must be precisely defined as:
``
3. Execute a single-pass string interpolation command. Replace the injection marker token verbatim with the full contents of the active `payload_buffer` string.
4. Ensure the structural shell wrapper remains untouched. The compiler is strictly banned from editing any boilerplate code, wrapper layout attributes, global styling nodes, or tail classes natively written inside `design-canvas.jsx`.
5. Write the newly synthesized code stream out to a temporary local staging handle at: `/outputs/final_canvases/[email_id]_canvas_integrated.jsx`.

**STRUCTURAL ARCHITECTURE (VISUAL MAP OF THE INTEGRATED CANVAS):**

```jsx
import React from 'react';
import { CanvasShell, TypographyProvider } from '../components/GlobalProviders';

// STATIC WRAPPER HOUSING LAYER
export const IntegratedDesignCanvas = (props) => {
  return (
    <CanvasShell width={600} alignment="center" className="bg-[#F9F9F7] py-8">
      <TypographyProvider>
        
        {/* ======================================================== */}
        {/* INJECTED HERMES PAYLOAD START                            */}
        {/* ======================================================== */}
        
        {/* Component Position 1: UTIL-08 */}
        <NavGlobal />

        {/* Component Position 2: HERO-3 */}
        <HeroLayout text="Verbatim hook copy string..." />

        {/* Component Position 3: STORY-10 */}
        <StoryContainer body="Verbatim narrative block string..." />

        {/* Component Position 4: IMG-06 */}
        <ImageSplitter src="/assets/images/lifestyle/toddler-livingroom-dino-yellow.png" alt="Contextual lifestyle detail" />

        {/* ...[Remaining payload positions 5-N]... */}

        {/* ======================================================== */}
        {/* INJECTED HERMES PAYLOAD END                              */}
        {/* ======================================================== */}

      </TypographyProvider>
    </CanvasShell>
  );
};

```

**VALIDATION RULE:**
The system must run a structural dimension check post-injection. Count the occurrences of the structural container keys. If the token replacement string is found to be incomplete, or if the original injection marker `` still exists in the final target file stream, trigger an immediate `CANVAS_MERGE_FAILED` error status. Wipe the integrated output staging file immediately to prevent broken rendering upstream, lock the canvas thread, and abort execution.


## TASK 5.3: AUTOMATED RENDERING AUDIT & BRAND ADHERENCE LOCK

**Operational Objective**: Perform a rigorous static analysis and structural layout audit on the fully integrated canvas file to guarantee zero unclosed tags, zero component syntax corruption, and absolute fidelity to the core brand identity guidelines before final asset export.

---

### EXECUTION LOGIC

1. **AST Extraction**: Ingest the integrated canvas document (`/outputs/final_canvases/[email_id]_canvas_integrated.jsx`) and pass the string payload directly into a local Abstract Syntax Tree (AST) parser (e.g., Babel-parser with JSX plugin enabled).
2. **Syntax Integrity Scan**: Programmatically traverse the generated syntax tree to confirm absolute code compilation safety. If the parser encounters unclosed elements, unbalanced evaluation brackets, or mismatched tag sequences, halt execution immediately.
3. **Style Token Scraping**: Query the nodes of the tree to scrape every instance of Tailwind CSS class names and custom inline styles injected during the generation phase.
4. **Guideline Vector Interception**: Map the scraped style attributes against a strict, immutable **Brand Identity Matrix** to ensure color palettes, text scales, structural width limits, and padding configurations remain within approved thresholds.

---

### STAGE-GATE QA AUDIT SPECIFICATIONS

The integrated element stack must satisfy every rule in this checking matrix to pass validation:

| Audit Parameter | Design System Rule Constraint | Verification Method |
| --- | --- | --- |
| **Canvas Width Lock** | Must match exactly $600\text{px}$ layout width. Horizontal overflow is strictly banned. | Check outer wrapper primitives for `max-w-[600px]` or matching inline definitions. |
| **Color System Whitelist** | Allowed values restricted to approved tokens: Cream (`#F5F1EA`), Lavender (`#F0EDF8`), Slate Dark, and transparent backgrounds. | Regex evaluation against scraped `bg-[color]` and inline HEX assignments. |
| **Typography Scaling** | Desktop/Mobile text hierarchies must maintain semantic consistency. H1/H2 components must never skip weights down to body text. | Validate sequential header tag usage ($H_1 \rightarrow H_2 \rightarrow P$) and accompanying tracking classes. |
| **Accessibility Check** | Every parsed structural image element (`<img />` or custom graphic node) must feature a populated, non-null `alt` string wrapper. | Node validation checks inside the AST. Empty `alt=""` maps are unacceptable. |

---

### AUDIT DISPOSITION REPORT (SCHEMA C)

Upon completion of the parsing sweep, the Sub-Agent must generate an isolated verification log string. This log is appended to the batch run metadata folder: `/outputs/audit_reports/[email_id]_qa_report.json`.

```json
{
  "email_id": "checkout-03-e2",
  "audit_timestamp": "2026-06-17T22:34:35Z",
  "ast_compilation_success": true,
  "violations_detected": 0,
  "audit_metrics": {
    "detected_outer_width_px": 600,
    "unmapped_tailwind_tokens": [],
    "missing_alt_tags_count": 0
  },
  "brand_compliance_status": "APPROVED"
}

```

---

> ### CRITICAL REJECTION & ROLLBACK GATE
> 
> 
> If `violations_detected` evaluates to $> 0$ or if `brand_compliance_status` returns a `REJECTED` string, trigger an operational pipeline breaker.
> The integrated output canvas file must be immediately deleted from the local file path to block broken production code from downstream rendering engines. Write a failure packet to the system log, freeze environmental variables, and cleanly terminate the execution branch.


