package main

import (
	
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", index_handler)

	log.Fatal(http.ListenAndServe(":8081", nil))

}

func index_handler(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
}