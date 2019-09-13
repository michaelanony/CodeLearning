package main

import "fmt"
const boillingF=212.0

func main() {
	var f =boillingF
	var c =(f-32)*5/9
	fmt.Printf("boiling point = %gF or %gC\n",f,c)

}
