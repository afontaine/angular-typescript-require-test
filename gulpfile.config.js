var gulpConf = (function () {
  function gulpConfig() {
    this.source = './src/';
    this.build = './dist/';

    this.scripts = 'scripts/';
    this.styles = 'styles/';

    this.typescript = this.source + this.scripts + '**/*.ts';
    this.html = this.source + '**/*.html';
    this.scss = this.source + this.styles + '**/*.scss';
    this.bower = 'bower_components/';

    this.javascript = this.build + this.scripts;

    this.css = this.build + this.styles;

    this.typeDefinitions = './typings/**/*.d.ts';
  }
  return gulpConfig;
})();

module.exports = gulpConf;
