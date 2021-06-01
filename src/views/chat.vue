<template>
  <div
    class="grey darken-1 full-page"
    v-chat-scroll="{ smooth: true, notSmoothOnInit: true }"
  >
    <div
      class="container "
      :class="{ 'darker': message.darker }"
      v-for="message of messages"
      :key="message.id"
    >
      <p>[{{ message.from }}] {{ message.text }}</p>
       <button class="btn btn-right editMessage" @click.prevent="editMessage(message)">Изменить</button>
       <button class="btn btn-danger btn-right editMessage" @click.prevent="deleteMessage(message)">Удалить</button>
      <span class="time-right"
        >{{ new Date(message.time) | date("time") }}
      </span>
     
    </div>
    <form>
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field footer col s12">
              <i class="material-icons prefix">textsms</i>
              <input
                type="text"
                id="autocomplete-input"
                class="autocomplete col s10"
                v-model="message"
              />
              <label for="autocomplete-input">Сообщение</label>
              <button
                class="btn waves-effect waves-light send"
                type="submit"
                @click.prevent="sendMessage"
                 v-if="!isEdit"
              >
                Отправить<i class="material-icons right">send</i>
              </button>
              <button
                class="btn waves-effect waves-light send"
                type="submit"
                v-else
                @click.prevent="sendEdit"
              >
                Изменить<i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  data() {
    return {
      message: "",
      messages: [],
      darker: false,
      class : false,
      isEdit : false,
      item : null,
    };
  },
  methods: {
    async sendMessage() {
      await db.collection("messages").add({
        text: this.message,
        time: new Date().toJSON(),
        from: this.$store.getters.getName,
      });
      this.message = "";
    },
    editMessage(message) {
      console.log(message);
      this.isEdit = true,
      this.message = message.text,
      this.item = {...message, id :message.id}
      console.log(this.item, );
      
      
    },
    deleteMessage(message) {
      console.log(message);
      this.$store.dispatch('deleteMessage', message)
    },
    sendEdit() {
      this.isEdit = false;
      this.$store.dispatch('updateMessage', {...this.item, text : this.message});
      this.message = ''



    }

  },
  
   mounted() {
    // let ref = db.collection('messages').orderBy('time')
    //  ref.onSnapshot(s=>{
    //   s.docChanges().forEach(change=>{
    //     let doc = change.doc
    //     this.messages.push({
    //       from : doc.data().from,
    //       text : doc.data().text,
    //       time : doc.data().time,
    //       id : doc.data().id,
    //       darker : this.$store.getters.getName == doc.data().from ? true : false
    //     })

       
    //   })
    // })
    
        

  },
 

  firestore :{
    messages : db.collection('messages').orderBy('time')
  },
 
};
</script>









<style scoped>
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}

/* Style time text */
.time-right {
  float: right;
  color: #aaa;
  clear: both;
}

/* Style time text */
.time-left {
  float: left;
  color: #999;
}
.footer {
  position: absolute;
  bottom: 0;
}
.send {
  display: inline-block;
}
.message {
  width: 50%;
}
.full-page {
  height: 100vh;
  overflow-y: scroll;
}
.btn-right{
  float: right;
  
}
.btn-danger {
  background-color: #c0392b ;
}

</style>