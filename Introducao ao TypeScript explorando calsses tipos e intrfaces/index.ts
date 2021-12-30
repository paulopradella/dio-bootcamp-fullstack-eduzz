//Executando a função soma
function soma(a:number, b:number){
    return a + b;
}

//Como funcionam as interfaces
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal ={
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

//Como funcioam os types
interface IAnimal2{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean
}

interface IFelino2 extends IAnimal2{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal2{
    porte: 'pequeno'| 'médio' | 'grande';
}
type IDomesico = IFelino2 | ICanino;

const animal2: IDomesico ={
    domestico: true,
    nome: 'Elefante',
    porte: 'médio',
    tipo: 'terrestre',
}

//Tratando a tag input
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);  
});

//O que são Generic Types
function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceALista([1,2,3], 4)

// Desenvolvendo condicionais a partir de parâmetros:
interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo:  'super' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario|IAdmin){
    if('cargo' in usuario){
        // redirecionar para a area de adminitração

    }

    //redirecionar para area do usuário
}
// Utilizando o caracter "?" para variáveis opcionais:
interface IUsuario2{
    id: string;
    email: string;
    cargo:  'super' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione2(usuario: IUsuario2){
    if(usuario.cargo){
        // redirecionar (usuario.cargo)

    }
       //redirecionar para area do usuário 
}


// Criando variáveis com propriedade readonly e private:
interface Cachorro {
    nome: string
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly[k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade= idade;
    }
}

// Como importar bibliotecas com typescript:
// import $ from 'jquery';
// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou nova função');
        
//     }
// })

// $('body').novaFuncao;

// Exemplo de como usar Omit e conclusão do curso:
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview = Omit<Todo, "description">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
   