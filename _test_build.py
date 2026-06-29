#!/usr/bin/env python3
import sys
sys.path.insert(0, '/root/projects/brightkidco')
import build_emails as be

sections = [
    be.section_wrapper(be.c_headline('You left something, no rush')),
    be.section_wrapper(be.c_paragraph('Whether you had one foot on the checkout button or you were still reading, if your child does not seem to feel when they need to go, you were looking in the right place.')),
    be.section_wrapper(be.c_button('Check out when you are ready', href='https://brightkidco.com/cart')),
]
html = be.assemble_email('You left something, no rush', "Your cart is still here. So is the 60-day guarantee. Whenever you are ready.", sections)
print('Length:', len(html), 'chars')
be.write_email('cart', 'test', html)
print('Test email written')
