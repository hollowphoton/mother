# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- House rule settings from traash, failure tolerated, MoSh discord, etc.
- Roll tables from Hive Mind, 3rd party zines, and MoSh discord, etc.
- Dead Planet, A Pound of Flesh, and Gradient Descent compendium packs

## [0.0.2] - 2020-11-17

### Added

- Added common template to module item type
- Added new attributes field called type that describes the item type (trinket, patch, weapon, tool, etc.)
- Added first item sheet, a very basic weapon one to test out mapping values back to the item data
- Added localization support, starting with an English version

### Changed

- Updated weapon template to better track ammo

### Fixed

- Typo in stat boosts listed for class item

### Removed

- Actor template for crew (was supposed to represent the crew as a whole)
- Item templates for consumables (intergrated this into weapons directly)

## [0.0.1] - 2020-11-13

### Added

- Actor template that supports player characters, mercs, monsters, and ships, and crew
- Item template that supports classes, skills, modules, conditions, weapons, items, consumables, and debt