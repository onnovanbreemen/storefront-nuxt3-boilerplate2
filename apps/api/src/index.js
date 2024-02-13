import express from 'express';
import { sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';
import { buildModule } from "@vue-storefront/sdk";


const connector = buildModule(sdkModule).connector;

const app = express();

console.log(connector)

app.get('/api/getProduct/:slug', (req, res) => {
    connector.getProduct({ slug: req.query.slug }).then(p => res.send(p));
});
app.get('/api/getCart', (req, res) => {
    connector.getCart().then(r => res.send(r))
});
app.get('/api/getCustomer', (req, res) => {
    connector.getCustomer().then(r => res.send(r))
});
app.get('/api/getProducts', (req, res) => {
    connector.getProducts().then(r => res.send(r))
});
app.get('/api/getProductReviews/:slug', (req, res) => {
    connector.getProductReviews({ slug: req.query.slug }).then(r => res.send(r))
});
app.get('/api/getProductRecommended/:slug', (req, res) => {
    connector.getProductRecommended({ slug: req.query.slug }).then(r => res.send(r))
});
app.get('/api/getShippingMethods', (req, res) => {
    connector.getShippingMethods().then(r => res.send(r))
});
app.get('/api/getContent', (req, res) => {
    connector.getContent({ url: req.url }).then(r => res.send(r))
});
app.get('/api/getContent/:url', (req, res) => {
    connector.getContent({ url: req.url}).then(r => res.send(r))
});
export default app;