/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclijadt.demo.org/org/documents/epl-v10.php

   Authors:
     * ???

************************************************************************ */

/**
 * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-color-chooser.png)
 */

qx.Class.define("bernstein.demo.ColorChooser",
{
  extend: qx.ui.window.Window,

  construct: function()
  {
    this.base(arguments);

    this._createControls();
  },


  members:
  {
    _createControls: function()
    {
      this.set({
        layout: new qx.ui.layout.VBox(16),
        icon: "icon/16/apps/utilities-color-chooser.png",
        caption: "Color Selector"
      });
    
      var box = new qx.ui.container.Composite().set({
        layout: new qx.ui.layout.VBox(),
        padding: 3,
        allowGrowX: true,
        allowGrowY: true
      });
    
      box.add(new qx.ui.control.ColorSelector());
      this.add(box, {flex: 1});
      
      this.addListenerOnce("appear", this.center, this);
      
      this.addListener("appear", function() {
        this.fadeIn(200);
      }, this);

      this.addListener("keypress", function(e) {
        if (e.getKeyIdentifier() == "Escape") {
          this.close();
        }
      }, this);
    }
  }

});

