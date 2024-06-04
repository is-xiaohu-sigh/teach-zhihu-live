importScripts('./mock/utils.js', './mock/index.js', './mock/handler.js', './mock/storage.js', './mock/schema.js')

self.addEventListener('activate', (event) => {
  event.waitUntil(initMockSystem())
})

const API_REG = /^\/api\/(.*)/

self.addEventListener('fetch', (event) => {
  const uri = new URL(event.request.url)
  const [, splitPath] = Array.from(API_REG.exec(uri.pathname) || [])
  if (!splitPath) return
  event.respondWith(getMockData(splitPath, uri, event.request))
})
