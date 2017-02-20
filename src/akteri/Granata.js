import {sudara} from 'akcije/sudari'
import Predmet from 'klase/Predmet'
import {gravitacija} from '../konstante'
import slikaPlamen from 'slike/plamen.gif'
import slikaGranata from 'slike/granata.gif'

const potisak = 500
const silaUdara = 50
let energijaMete = 0

export default class Granata extends Predmet {
  constructor(vlasnik, src = slikaGranata) {
    super(src)
    this.vlasnik = vlasnik
    this.z = vlasnik.z
    this.nivoTla = this.platno.height - Math.random() * this.platno.height * 0.2
    this.ispaljena = false
    this.nestala = false
    this.plamen = new Predmet(slikaPlamen)
    this.plamen.skaliranjeObecaj(0.4)
    this.plamen.sakrij()
    this.sakrij()
  }

  update(dt) {
    if (!this.ispaljena) return
    this.dodajSilu(gravitacija * dt, Math.PI / 2)
    this.azurirajUgao()
    this.proveriTlo()
    super.update(dt)
  }

  // TODO: prebaciti na Predmet
  azurirajUgao() {
    this.ugao = Math.atan2(this.dy, this.dx)
  }

  postavi() {
    this.x = Math.cos(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.x
    this.y = Math.sin(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.y
    this.ugao = this.vlasnik.ugao
  }

  pucaj() {
    this.pokazi()
    this.postavi()
    this.dodajSilu(potisak)
    this.ispaljena = true
  }

  sudara(predmet) {
    return sudara(this, predmet)
  }

  proveriTlo() {
    if (this.y > this.nivoTla) this.nestani()
  }

  proveriPogodak(predmet) {
    if (!this.sudara(predmet)) return
    this.eksplodiraj()
    this.nestani()
    energijaMete = energijaMete || predmet.energija
    predmet.dodajSilu(-silaUdara)
    predmet.skiniEnergiju(Math.round(Math.random() * energijaMete / 3))
  }

  eksplodiraj() {
    this.plamen.x = this.x
    this.plamen.y = this.y
    this.plamen.pokazi()
  }

  nestani() {
    super.nestani()
    this.nestala = true
  }

  render() {
    super.render()
    this.plamen.render()
  }
}
