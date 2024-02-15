import express from 'express';
import { sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';
import { buildModule } from '@vue-storefront/sdk';
const connector = buildModule(sdkModule).connector;

const app = express();

console.log('setup', connector);
console.log('app', app);

const getSlug = (query: any) => {
  return { slug: query.slug };
};
app.get('/api/getProduct/:slug', (req, res) => {
  connector.getProduct(getSlug(req.query)).then(p => res.send(p));
});
app.get('/api/getCart', (_req, res) => {
  connector.getCart().then(r => res.send(r));
});
app.get('/api/getCustomer', (_req, res) => {
  connector.getCustomer().then(r => res.send(r));
});
app.get('/api/getProducts', (_req, res) => {
  connector.getProducts().then(r => res.send(r));
});
app.get('/api/getProductReviews/:slug', (req, res) => {
  connector.getProductReviews(getSlug(req.query)).then(r => res.send(r));
});
app.get('/api/getProductRecommended/:slug', (req, res) => {
  connector.getProductRecommended(getSlug(req.query)).then(r => res.send(r));
});
app.get('/api/getShippingMethods', (req, res) => {
  connector.getShippingMethods().then(r => res.send(r));
});
app.get('/api/getContent', (req, res) => {
  connector.getContent({ url: req.url }).then(r => res.send(r));
});
app.get('/api/getContent/:url', (req, res) => {
  connector.getContent({ url: req.url }).then(r => res.send(r));
});
app.get('/getProduct/:slug', (req, res) => {
  connector.getProduct(getSlug(req.query)).then(p => res.send(p));
});
app.get('/getCart', (_req, res) => {
  connector.getCart().then(r => res.send(r));
});
app.get('/getCustomer', (_req, res) => {
  connector.getCustomer().then(r => res.send(r));
});
app.get('/getProducts', (_req, res) => {
  connector.getProducts().then(r => res.send(r));
});
app.get('/getProductReviews/:slug', (req, res) => {
  connector.getProductReviews(getSlug(req.query)).then(r => res.send(r));
});
app.get('/getProductRecommended/:slug', (req, res) => {
  connector.getProductRecommended(getSlug(req.query)).then(r => res.send(r));
});
app.get('/getShippingMethods', (_req, res) => {
  connector.getShippingMethods().then(r => res.send(r));
});
app.get('/getContent', (req, res) => {
  connector.getContent({ url: req.url }).then(r => res.send(r));
});
app.get('/getContent/:url', (req, res) => {
  connector.getContent({ url: req.url }).then(r => res.send(r));
});
app.get('/:any', (req, res) => {
  res.send(`not found: [${req.url}]`);
});

// export as any to prevent "ParsedQs" is not exported by "../../node_modules/@types/qs/index.d.ts
export default app as any;
