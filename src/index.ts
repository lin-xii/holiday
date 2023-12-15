import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";

// vant
import { Calendar } from "vant";
import "vant/es/calendar/style";
import { Notify } from "vant";
import "vant/es/notify/style";

const app = createApp(App);
app.use(Calendar);
app.use(Notify);
app.mount("#root");
