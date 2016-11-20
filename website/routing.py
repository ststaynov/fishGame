from channels.routing import route


channel_routing = [
    route("http.request", "website.consumers.http_consumer"),
]