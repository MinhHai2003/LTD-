function CalculateScores(Scores){
    const sum = Scores.reduce((acc,Scores) => acc + Scores,0);
    return sum / Scores.length;
}

function determine( Dolphins,Koalas){
    const DolphinsScores = CalculateScores(Dolphins);
    const KoalasSrores = CalculateScores(Koalas);

    console.log("DolphinsScores : ${DolphinsScores}");
    console.log("KoalasSrores : ${KoalasSrores}");

    if(DolphinsScores > KoalasSrores){
        console.log("Dolphins win");
    } else if(KoalasSrores > DolphinsScores){
        console.log("KoalasSrores win");
    } else if(DolphinsScores == KoalasSrores){
        if(DolphinsScores >= 100 && KoalasSrores >= 100){
            console.log("Hòa");
        }else{
            console.log("No team win");
        }
    } else{
        console.log("No team win");
    }

const DolphinsScores1 =[96, 108, 89];
const KoalasSrores1 = [88, 91, 110];

const DolphinsScores2 = [97, 112, 101];
const KoalasSrores2 = [109, 95, 123];

const DolphinsScores3 = [97,112, 101];
const KoalasSrores3 = [109, 95, 106];

console.log("Score1 :");
determine(DolphinsScores1,KoalasSrores1);

console.log("Score2 :");
determine(DolphinsScores2,KoalasSrores2);

console.log("Score3 :");
determine(DolphinsScores2,KoalasSrores2);






}