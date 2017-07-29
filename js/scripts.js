function Button(text) {
    this.text = text || 'Hello';
}
Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        $('body').append(this.$element);
    }
};
var btn1 = new Button(); //wypisze domyślnie zadeklarowany tekst w lini 2.
var btn2 = new Button('New');
btn1.create();
btn2.create();//dlaczego ten przycisk nadpisuje poprzedni???