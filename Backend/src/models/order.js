const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
   // required: true,
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Food'
    },

  ],
  typeOrder: {
    type: String,
    required: true,
    enum: ["LOCAL", "DELIVERY"],
  },
  table: {
    type: Number,
  },
  address: {
    type: String,

  },
  stateOrder: {
    type: String,
    enum: ["TERMINADO", "ENPROCESO", "RECHAZADO"],
    default: "ENPROCESO",
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = model("Order", OrderSchema);