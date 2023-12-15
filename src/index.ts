import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

// vant
import { Calendar, Notify, BackTop } from "vant";
import "vant/es/calendar/style";
import "vant/es/notify/style";
import "vant/es/back-top/style";

const app = createApp(App);
app.use(Calendar);
app.use(Notify);
app.use(BackTop);
app.mount("#root");
