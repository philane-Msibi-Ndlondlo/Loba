
/**
 * @desc Class that logs to your console 
 * 1. Error
 * 2. Success
 * 3. Warning
 * 
 * @author Philane Msibi
 */

class Loba {

    /**
     * @desc ANSI constants
     * 
     */
    static start_hex_command = "\x1b[";
    static end_hex_command = "\x1b[0m";

    constructor() {}

    /**
     * @desc Default log with white text
     * 
     */
    static log(string = "") {
        console.log(string);
    }

    // FONT COLORS FUNCTIONS

    /**
     * @desc Function that writes errors with red font color
     * 
     */
    static red(string = "") {
        let formatted = this.format(string, "31");
        return this.log(formatted);
    }

    /**
     * @desc Function that writes errors with red font color
     * 
     */
    static error(string = "") {
        let formatted = this.format(string, "31");
        return this.log(formatted);
    }

    /**
     * @desc Function that writes with successes with green font color
     * 
     */
    static success(string = "") {
        let formatted = this.format(string, "32");
        return this.log(formatted);
    }

    /**
     * @desc Function that writes with warnings with yellow font color
     * 
     */
    static yellow(string = "") {
        let formatted = this.format(string, "33");
        return this.log(formatted);
    }

    /**
     * @desc Function that writes with warnings with yellow font color
     * 
     */
    static warning(string = "") {
        let formatted = this.format(string, "33");
        return this.log(formatted);
    }

    /**
     * @desc Function that writes with blue font color
     * 
     */
    static blue(string = "") {
        let formatted = this.format(string, "34");
        return this.log(formatted);
    }

    // END OF FONT COLORS FUNCTIONS

    // BACKGROUND COLOR FUNCTIONS

    static bred(string = "") {
        let formatted = this.format(string, "", "41");
        return this.log(formatted);
    }

    static berror(string = "") {
        let formatted = this.format(string, "", "41");
        return this.log(formatted);
    }

    static bgreen(string = "") {
        let formatted = this.format(string, "", "42");
        return this.log(formatted);
    }

    static bsuccess(string = "") {
        let formatted = this.format(string, "", "42");
        return this.log(formatted);
    }

    static byellow(string = "") {
        let formatted = this.format(string, "", "43");
        return this.log(formatted);
    }

    static bwarning(string = "") {
        let formatted = this.format(string, "", "43");
        return this.log(formatted);
    }

    static bblue(string = "") {
        let formatted = this.format(string, "", "44");
        return this.log(formatted);
    }

    // END OF BACKGROUND COLORS FUNCTIONS

    static format(string = "", color = "0", bcolor = "0") {

        let color_hex = this.validate_forecolor(parseInt(color)) ? color + ";" : "39;";
        let backcolor_hex = this.validate_backcolor(parseInt(bcolor)) ? bcolor : "49";

        return this.start_hex_command + color_hex + backcolor_hex + "m" + string + this.end_hex_command;
    }

    static validate_forecolor(color_code = 0) {

        return (color_code >= 30 && color_code <= 37)

    }

    static validate_backcolor(bcolor_code = 0) {

        return (bcolor_code >= 40 && bcolor_code <= 47)

    }

}

module.exports = Loba;