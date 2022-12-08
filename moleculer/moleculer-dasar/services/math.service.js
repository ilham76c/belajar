module.exports = {
  name: 'math',
  actions: {
    add(ctx) {
      return Number(ctx.params.a) + Number(ctx.params.b);
    },
    sub: {
      cache: false,
      params: {
        a: 'number',
        b: 'number'
      },
      handler(ctx) {
        return Number(ctx.params.a) - Number(ctx.params.b);
      }
    }
  }
};