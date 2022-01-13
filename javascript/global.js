module.exports = {
    actions: {
        jos: () => {
            console.log('jos');
        },
        tes: 
            function() {
                this.jos();
                console.log(this.print());
            }
        
    },
    methods: {
      print: () => {
        return 'from print';
      }
    }
}
  