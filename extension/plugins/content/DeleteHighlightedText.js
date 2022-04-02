import ContentPlugin from "../../lib/ContentPlugin.js";

class DeleteHighlightedText extends ContentPlugin {
  constructor() {
    super("Deletes Highlighted Text");
  }

  id = "DTH";

  settings = {
    enabled: false,
  };

  run() {
    function deleteContent() {

        var span = document.createElement("span");
        span.style.fontWeight = "bold";
        span.style.color = "black";

        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                range.deleteContents()
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }
    document.onmouseup = deleteContent;
}


  cleanup() {}
}

export default DeleteHighlightedText;
