programa {
	funcao inicio() {
	   
	   cadeia Vetor[5] //declara um vetor de 5 posi��es
	   cadeia Matriz[5][3] //declara uma matriz de 5 linhas e 3 colunas
	   
	   cadeia frutas[4]
	   frutas[0]="Ma��"
	   frutas[1]="Pera"
	   frutas[2]="Uva"
	   frutas[3]="Mel�o"
	   escreva(frutas[2]+"\n\n\n")
	   
	   cadeia cesta[][] = {{"Ma��", "100"},{"Pera", "200"},{"Mel�o", "300"}}
	   escreva("Fruta: " + cesta[0][0] +"\nQuantidade: " + cesta[0][1])
	}
}