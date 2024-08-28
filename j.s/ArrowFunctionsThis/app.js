const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function() {
        return `${this.lastName} ${this.firstName}`;
    },
    delayName: function() {
        setTimeout(function() {
            console.log(this.fullName());
        }, 2000);
    }
}