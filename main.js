/* A better HTML5 template that gives you a solid starting point to work from.
 * Code will be inserted at the cursor position in the active document.
 *
 * The extention can be found in the menu under: "Edit > Better HTML5 Template"
 *
 * Author: William Larsson
 * Date: 2019-09-22
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");

    // When the menu item is clicked:
    function betterHtml() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var html = "<!DOCTYPE html>\n" +
                "<html lang=\"\">\n\n" +
                "<head>\n" +
                "\t<meta charset=\"utf-8\">\n" +
                "\t<title>Example Title</title>\n" +
                "\t<meta name=\"author\" content=\"Your Name\">\n" +
                "\t<meta name=\"description\" content=\"Example description\">\n" +
                "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "\t<link rel=\"stylesheet\" href=\"style.css\">\n" +
                "\t<link rel=\"icon\" type=\"image/x-icon\" href=\"\"/>\n" +
                "</head>\n\n" +
                "<body>\n" +
                "\t<header></header>\n" +
                "\t<main></main>\n" +
                "\t<footer></footer>\n" +
                "\t<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
                "</body>\n\n" +
                "</html>";

            var pos = editor.getCursorPos();
            editor.document.replaceRange(html, pos);
        }
    }

    var COMMAND_ID = "betterhtmltemplate.williamlarsson"; // package-style naming to avoid collisions
    CommandManager.register("Better HTML5 Template", COMMAND_ID, betterHtml);

    // Create a menu item
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(COMMAND_ID);
    menu.addMenuDivider();
});
