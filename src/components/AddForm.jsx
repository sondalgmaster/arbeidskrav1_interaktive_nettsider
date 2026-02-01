import "../style/form.scss"
function AddForm() {
  

  return (
    <>
    <form >
        <label id="legVare" htmlFor="">Vare
        <input type="text" placeholder="Tomat" />
        </label>
        
        <label htmlFor="legAntall">Antall
        <input id="legAntall" type="number" placeholder="1" />
        </label>

        <button>Legg til vare</button>
    </form>
    </>
  )
}
export default AddForm