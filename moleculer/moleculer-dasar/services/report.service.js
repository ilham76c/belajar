module.exports = {
  name: 'report',
  events: {
    // Subscribe to 'math.sub' event
    'math.sub'(payload) {
      this.logger.info(payload);
    }
  }
};