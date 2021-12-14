programa {
	funcao inicio() {
	   inteiro menu = 0
	   
	   escreva("Seleciona uma opção:\n1 - Netflix\n2 - Amazon Prime\n3- HBO MAX\n4 - SAIR\n")
	   leia(menu)
	   
	   escolha(menu){
	       caso 1:
	       escreva("\nCarregando a NETFLIX!!!")
	       pare
	       caso 2:
	       escreva("\nCarregando a AMAZON PRIME!!!")
	       pare
	       caso 3:
	       escreva("\nCarregando a HBO MAX!!!")
	       pare
	       caso 4:
	       escreva("\nSaindo")
	       pare
	       caso contrario:
	       escreva("Escolha uma opção válida!")
	   }
	   }
		
	}
