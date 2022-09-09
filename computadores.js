class Pc{
    constructor(ram, hdd, cpu){
        this.ram = ram
        this.hdd = hdd
        this.cpu = cpu
    }
    delivery(){

    }
}

class Server{
    constructor(ram, hdd, cpu){
        this.ram = ram
        this.hdd = hdd
        this.cpu = cpu
    }
    delivery(){

    }
}

//função construtora
class Computadores{
    createComputadores(type, ram, hdd, cpu){
        if(type === "pc"){
            return new Pc(ram, hdd, cpu)
        }
        if(type === "server"){
            return new Server(ram, hdd, cpu)
        }
    }

}

const computador = new Computadores()
const pc = computador.createComputadores('pc', '2GB', '1GB', '20GHz')
console.log(pc)
const server = computador.createComputadores('server', '3GB', '2GB', '10GHz')
console.log(server)