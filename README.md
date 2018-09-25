# SK/CZ Payment Codes Generator

When sending payments to the Slovak or Czech Republic, you may be asked to fill out codes (symbols) known as VS, SS or KS. Those should be basically put into the "reference message to the recipient". The format is `/VS1234567890/SS1234567890/KS1234` for payments in Slovakia or `/VS/1234567890/SS/1234567890/KS/1234` for payments in the Czech Republic.

To make it easier to create the reference message and prevent some common mistakes, you can use my bookmarklet or online generator. You can also check out the [Background](#background) for more information.

Do you see any mistakes or did you have any problems using the generated text? Let me know by opening an [Issue](https://github.com/durasj/sk-cz-banking-symbols-generator/issues) or [sending me an email](mailto:jakub@duras.me).

## Bookmarklet

You can create a bookmark with URL that will contain code that will be executed each time you open the bookmark. The bookmarklet provided by me prompts for all 3 symbols, validates them, and fills them in the currently focused text field.

- Code for the format used in **Slovakia**: [sk.js](https://raw.githubusercontent.com/durasj/sk-cz-payment-codes/master/bookmarklets/sk.js)

- Code for the format used in **Czechia**: [cz.js](https://raw.githubusercontent.com/durasj/sk-cz-payment-codes/master/bookmarklets/cz.js)

## Generator

If you are not comfortable using the bookmarklet or need to generate the reference message only once, you can use my online generator available at [symbols.duras.me](https://symbols.duras.me).

## Background

Payment Codes are a relatively old concept established by the CERTIS system.

There are three different codes (also commonly called "symbols" in CZ/SK):

- **VS - Variable Code/Symbol - Variabilný/Variabilní symbol** - optional, up to 10 numbers, used to identify individual payment (e.g. invoice number).
- **SS - Specific Code/Symbol - Špecifický/Specifický symbol** - optional, up to 10 numbers, used to identify a subject (tax id, national id) that doesn't change between the payments.
- **KS - Constant Code/Symbol - Konštantný/Konstantní symbol** - now mostly optional, exactly 4 numbers (prefixed with zeroes if necessary), used to define the type of the payment. Not required to be used unless specified otherwise. Possible options and their meaning are available on [Wikipedia article in Czech](https://cs.wikipedia.org/wiki/Konstantn%C3%AD_symbol_(pen%C4%9B%C5%BEn%C3%AD_p%C5%99evod)) and [Wikipedia article in Slovak](https://sk.wikipedia.org/wiki/Zoznam_bankov%C3%BDch_kon%C5%A1tantn%C3%BDch_symbolov_na_Slovensku).

During the adoption of SEPA (Single Euro Payment Area) payments that do not support those symbols, payment codes had to be somehow adapted. It was decided they will be specified in the field named "reference message"/"message for the recipient"/"remittance information". The recommended format seems to differ between the countries.

In the **Slovakia** it's recommended to use the format `/VS1234567890/SS1234567890/KS1234`, see document published by "Slovak Banking Association" (non-governmental organization): [Additional Optional Service applied in Slovakia to
SEPA Credit Transfer (SCT)](https://web.archive.org/web/20170329095047/http://www.sbaonline.sk:80/files/subory/SEPA/sepa_sk-payment_symbols.pdf).

In the **Czechia** it's recommended to use the format `/VS/1234567890/SS/1234567890/KS/1234`, see "joint recommendation of the Czech National Bank and the Czech Banking Association": [Entering of Variable, Constant and Specific Codes for Payments
from Abroad to the Czech Republic](https://web.archive.org/web/20171215171919/http://www.cnb.cz/en/payment_systems/reg_payment_sys/download/symbols_payment_codes.pdf).
