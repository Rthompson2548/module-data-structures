const LinkedList = require("./lib/linkedList");

// "Editor" is used to store values in a linked list
class Editor {
  constructor(text = new LinkedList()) {
    // text: linked list staring chars in editor
    // cursor: pointer to position of cursor in editor
    this.text = text;
    this.cursor = this.text.find(
      // points cursor at the last index of list by default
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */

  // passed
  insert(char) {
    if (this.cursor) {
      this.text.insert(char, (node) => node.value === this.cursor.value);
    } else {
      this.text.insertAtHead(char);
    }
    return this.arrowRight();
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
    if (this.cursor) {
      const current = this.cursor;
      this.arrowLeft();
      this.text.remove((node) => node === current);
    }
    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if (this.cursor && this.text.head) {
      this.cursor = this.text.findWithPrevious((node) => {
        return this.cursor.value === node.value;
      })[1];
    }
    return this;
  }
  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */

  // passed
  arrowRight() {
    // if the list has >= 2 nodes, set the cursor position to the next node
    if (this.cursor && this.cursor.next) {
      this.cursor = this.cursor.next;
      // if there is no curser, set it to be at the head of list
    } else if (!this.cursor) {
      this.cursor = this.text.head;
    }
    return this;
  }
}

module.exports = Editor;
