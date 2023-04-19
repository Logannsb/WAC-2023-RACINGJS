window.onload = () => {
    const div = document.querySelector('footer div')

    fetch('https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25')
        .then((ditmoi) => {
            console.log(ditmoi);
            ditmoi = ditmoi.json()
            return ditmoi
        })
        .then((nomme) => {
            console.log(nomme);
            let text = ""
            let obj = nomme.records
            for (let i = 0; i < obj.length; i++) {
                text += obj[i].record.fields.nom_commune + "\n" + obj[i].record.fields.nom_etablissement + "\n" + obj[i].record.fields.mail + "\n\n"
            }
            div.innerText = text
        })
}