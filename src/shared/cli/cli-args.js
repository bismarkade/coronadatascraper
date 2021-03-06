import yargs from 'yargs';

const { argv } = yargs
  .option('date', {
    alias: 'd',
    description: 'Generate data for or start the timeseries at the provided date in YYYY-M-D format',
    type: 'string'
  })
  .option('endDate', {
    alias: 'e',
    description: 'The date after which to stop generating timeseries data',
    type: 'string'
  })
  .option('location', {
    alias: 'l',
    description: 'Scrape only the location provided by full name, i.e City, County, State, Country',
    type: 'string'
  })
  .option('country', {
    alias: 'c',
    description: 'Scrape only the country provided, like AUS',
    type: 'string'
  })
  .option('id', {
    alias: 'i',
    description: 'Scrape only the location provided by id',
    type: 'string'
  })
  .option('skip', {
    alias: 's',
    description: 'Skip the location provided by full name, i.e City, County, State, Country',
    type: 'string'
  })
  .option('outputSuffix', {
    alias: 'o',
    description: 'The suffix to add to output files, i.e. passing TEST will produce data-TEST.json etc',
    type: 'string'
  })
  .option('quiet', {
    alias: 'q',
    description: 'Suppress logs',
    type: 'boolean'
  })
  .option('findFeatures', {
    description: 'Include feature information in output data',
    type: 'boolean'
  })
  .options('findPopulations', {
    description: 'Include population information in output data',
    type: 'boolean'
  })
  .options('writeData', {
    description: 'Write to dist folder',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h');

export default argv;
