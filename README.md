## ARTEMIS (a skyrat downstream)

[![CI Suite](https://github.com/ArtemisStation/artemis/actions/workflows/ci_suite.yml/badge.svg)](https://github.com/ArtemisStation/artemis/actions/workflows/ci_suite.yml)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ArtemisStation/artemis.svg)](https://isitmaintained.com/project/ArtemisStation/artemis "Percentage of issues still open")
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/ArtemisStation/artemis.svg)](https://isitmaintained.com/project/ArtemisStation/artemis "Average time to resolve an issue")
![Coverage](https://img.shields.io/codecov/c/github/ArtemisStation/artemis)

![ohshit](https://raw.githubusercontent.com/ArtemisStation/artemis/master/oh-shit-the-syndicate.svg) ![witty](https://raw.githubusercontent.com/ArtemisStation/artemis/master/made-with-witty-badges.svg) ![edgy](https://raw.githubusercontent.com/ArtemisStation/artemis/master/edgy-roleplay.svg)

* **SITE:** WIP
* **SOURCE:** https://github.com/Skyrat-SS13/Skyrat-tg
* **WIKI:** WIP
* **SOURCE DOCS:** https://codedocs.tgstation13.org/
* **DISCORD:** WIP
* **CODERBUS:** https://discord.gg/Vh8TJp9

ARTEMIS is a downstream fork of Skyrat, which is based on the /tg/station codebase.

Space Station 13 is a paranoia-laden round-based roleplaying game set against the backdrop of a nonsensical, metal death trap masquerading as a space station, with charming spritework designed to represent the sci-fi setting and its dangerous undertones. ARTEMIS itself is an alternative take on the relationship between Nanotrasen, her workers, and the factions that are both allied to and hostile against her.

## DOWNLOADING
[Downloading](.github/guides/DOWNLOADING.md)

[Running on the server](.github/guides/RUNNING_A_SERVER.md)

## COMPILING

As of **2021-01-04**, we have changed the way to compile the codebase.

Find `BUILD.bat` here in the root folder of ARTEMIS, and double click it to initiate the build. It consists of multiple steps and might take around 1-5 minutes to compile. You can then [setup the server](.github/guides/RUNNING_A_SERVER.md) normally by opening `tgstation.dmb` in DreamDaemon.

*Building ARTEMIS in DreamMaker directly is now deprecated and might produce errors, such as `'tgui.bundle.js': cannot find file`.*

**[How to compile in VSCode and other build options](tools/build/README.md).**

## CONTRIBUTORS

## CURRENT UPSTREAM MODULES
* **IC Spawning**: https://github.com/Skyrat-SS13/Skyrat-tg/pull/104
* **Horrorform**: https://github.com/Skyrat-SS13/Skyrat-tg/pull/241
* **Blueshield**: https://github.com/Skyrat-SS13/Skyrat-tg/pull/127

## CURRENT ARTEMIS MODULES

## LICENSE

All code after [commit 333c566b88108de218d882840e61928a9b759d8f on 2014/31/12 at 4:38 PM PST](https://github.com/tgstation/tgstation/commit/333c566b88108de218d882840e61928a9b759d8f) is licensed under [GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html).

All code before [commit 333c566b88108de218d882840e61928a9b759d8f on 2014/31/12 at 4:38 PM PST](https://github.com/tgstation/tgstation/commit/333c566b88108de218d882840e61928a9b759d8f) is licensed under [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).
(Including tools unless their readme specifies otherwise.)

See LICENSE and GPLv3.txt for more details.

The TGS DMAPI API is licensed as a subproject under the MIT license.

See the footer of [code/__DEFINES/tgs.dm](./code/__DEFINES/tgs.dm) and [code/modules/tgs/LICENSE](./code/modules/tgs/LICENSE) for the MIT license.

All assets including icons and sound are under a [Creative Commons 3.0 BY-SA license](https://creativecommons.org/licenses/by-sa/3.0/) unless otherwise indicated.
