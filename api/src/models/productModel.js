import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    image:{type:String,require:true},
    title:{type:String,require:true},
    price:{type:Number,require:true}
});

export const Products = mongoose.model('Products', productSchema);