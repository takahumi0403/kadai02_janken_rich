'use strict';

{   
    function render(quiz){
        const main = document.querySelector('main');


        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        h2.textContent = quiz[0];

        

        const ul = document.createElement('ul');
        const li0 = document.createElement('li');
        li0.addEventListener('click',() =>{
            if(quiz[4]=== 0){
                li0.classList.add('correct');
            }else{
                li0.classList.add('wrong');
            }

        });
        li0.textContent = quiz[1];
        li0.addEventListener('click',() =>{
            if(quiz[4]=== 0){
                li0.classList.add('correct');
            }else{
                li0.classList.add('wrong');
            }

        });
        const li1 = document.createElement('li');
        li1.textContent = quiz[2];
        li1.addEventListener('click',() =>{
            if(quiz[4]=== 1){
                li1.classList.add('correct');
            }else{
                li1.classList.add('wrong');
            }

        });
        const li2 = document.createElement('li');
        li2.textContent = quiz[3];
        li2.addEventListener('click',() =>{
            if(quiz[4]=== 2){
                li2.classList.add('correct');
            }else{
                li2.classList.add('wrong');
            }

        });

        ul.appendChild(li0);
        ul.appendChild(li1);
        ul.appendChild(li2);

        
        section.appendChild(h2);
        section.appendChild(ul);
        main.appendChild(section);
    }
    
    
    // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)

    const quizzes =[
        ['Q1 チーズの生産量が世界一である国はどこ？', 'アメリカ', 'ロシア', 'フランス', 0],
        ['Q2『ちぎる』という意味のイタリア語を語源とする、ピッツァ・マルゲリータに欠かせないチーズは何？', 'リコッタ', 'モッツアレラ', 'マスカルポーネ', 1],
        ['Q3『カマンベール』は何タイプのチーズ？', 'ウォッシュタイプ', 'シェーブルタイプ', '白カビタイプ', 2],
        ['Q4 那須高原の工場で焼き上げる「御用邸チーズケーキ」とは、どこの都道府県の名物土産？','栃木県','神奈川県','静岡県',0],
        ['Q5「マリボー」や「サムソー」は、どこの国のチーズ？','ドイツ','スペイン','デンマーク',2],
        ['Q6 世界三大ブルーチーズのひとつ「ロックフォール」の特徴として、正しいものはどれ？','原産国はイギリスである','羊の乳から作られる','「ドルチェ」「ピカンテ」の2種類がある',1],
        ['Q7 フランス料理のフルコースで、ワゴンに乗ったチーズが提供されるタイミングは、一般的にいつ？','前菜と魚料理の間','魚料理と肉料理の間','肉料理とデザートの間',2]

    ];

    quizzes.forEach((quiz)=>{
        render(quiz);
    });
   
}
