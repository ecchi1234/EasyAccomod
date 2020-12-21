import React, { Component } from "react";
import { database } from "../../services/firebase";

export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        chats: [],
        content: '',
        readError: null,
        writeError: null
      };
    }
    async componentDidMount() {
      this.setState({ readError: null });
      try {
        database.ref("chats").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
        });
      } catch (error) {
        this.setState({ readError: error.message });
      }
    }
  }