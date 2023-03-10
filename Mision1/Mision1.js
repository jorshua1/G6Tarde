alert('calculadora de notas de la escuela pequeños brocolitos')

let notauno = parseFloat(prompt('ingrese la nota del primer examen'))
if (isNaN(notauno) || notauno < 0 || notauno > 5) {
  alert('error')
} else {
  let notados = parseFloat(prompt('ingrese la nota del segundo examen'))
  if (isNaN(notados) || notados < 0 || notados > 5) {
    alert('error')
  } else {
    let notatres = parseFloat(prompt('ingrese la nota del tercer examen'))
    if (isNaN(notatres) || notatres < 0 || notatres > 5) {
      alert('error')
    } else {
      let trabajo1 = parseFloat(prompt('ingrese la nota del primer trabajo'))
      if (isNaN(trabajo1) || trabajo1 < 0 || trabajo1 > 5) {
        alert('error')
      } else {
        let trabajo2 = parseFloat(prompt('ingrese la nota del segundo trabajo'))
        if (isNaN(trabajo2) || trabajo2 < 0 || trabajo2 > 5) {
          alert('error')
        } else {
          let examenFinal = parseFloat(prompt('ingrese la nofinal'))
          if (isNaN(examenFinal) || examenFinal < 0 || examenFinal > 5) {
            alert('error')
          } else {
            let autoevaluacion = Number(
              prompt('ingrese la nota de autoevaluacion'),
            )
            if (
              isNaN(autoevaluacion) ||
              autoevaluacion < 0 ||
              autoevaluacion > 5
            ) {
              alert('error')
            } else {
              let coevaluacion = Number(
                prompt('ingrese la nota de coevaluacion'),
              )
              if (isNaN(coevaluacion) || coevaluacion < 0 || coevaluacion > 5) {
                alert('error')
              }
              let promedioNotas = ((notauno + notados + notatres) / 3) * 0.55
              let promedioTrabajos = ((trabajo1 + trabajo2) / 2) * 0.15
              let promedioExamen = examenFinal * 0.2
              let coeYauto = ((coevaluacion + autoevaluacion) / 2) * 0.1

              let promedioTotal =
                promedioTrabajos + promedioExamen + promedioNotas + coeYauto
              if (promedioTotal < 3 && promedioTotal >= 2) {
                alert(
                  'su promedio total es de ' +
                    promedioTotal +
                    ' su nivel de desempeño es Bajo ' +
                    ' ha reprobado curso',
                )
              } else if (promedioTotal < 4 && promedioTotal >= 3) {
                alert(
                  'su promedio total es de ' +
                    promedioTotal +
                    ' su nivel de desempeño es Basico ' +
                    ' ha aprovado curso',
                )
              } else if (promedioTotal <= 4.6 && promedioTotal >= 4) {
                alert(
                  'su promedio total es de ' +
                    promedioTotal +
                    ' su nivel de desempeño es Alto ' +
                    ' ha aprovado curso',
                )
              } else if (promedioTotal <= 5 && promedioTotal >= 4.7) {
                alert(
                  'su promedio total es de ' +
                    promedioTotal +
                    ' su nivel de desempeño es Superior ' +
                    ' ha aprovado curso',
                )
              } else if (promedioTotal < 2 && promedioTotal >= 0) {
                alert(
                  'su promedio total es de ' +
                    promedioTotal +
                    ' su nivel de desempeño es Muy Bajo ' +
                    ' ha reprobado curso',
                )
              }
            }
          }
        }
      }
    }
  }
}
