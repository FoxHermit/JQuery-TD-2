$(function(){
// J'ajoute un évènement click à mon bouton id verify.
  $('#verify').click(function(){
// Je stocke dans des variables la valeur des input.
    var Note1 = $('#Note1').val();
    var Note2 = $('#Note2').val();
    var Note3 = $('#Note3').val();
    var Note4 = $('#Note4').val();
    var Note5 = $('#Note5').val();
// Je stocke dans la variable result la moyenne des notes. J'utilise parseFloat pour transformer les chaînes de caractères renvoyées par .val() en valuers numériques.
    var Result = ((parseFloat(Note1) + parseFloat(Note2) + parseFloat(Note3) + parseFloat(Note4) + parseFloat(Note5)) / 5);
// Je compare ma variable Result par des intervalles.
    if(Result >= 0 && Result< 10){
      alert('En dessous de la moyenne.' + Result);
    }
    else if (Result >= 10 && Result < 13 ){
      alert('Moyen.' + Result);
    }
    else if (Result >= 13 && Result < 16 ){
      alert('Bien.' + Result);
    }
    else if (Result >= 16 && Result < 20 ){
      alert('Très Bien.' + Result);
    }
    else if (Result == 20){
      alert('Excellent.' + Result);
    }
  });
});
