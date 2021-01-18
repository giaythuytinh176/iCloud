//import '../scss/styles.scss';
import fetch from 'cross-fetch';

interface ISingleRepo {
  name: string;
}
interface IRepos {
  items: Array<ISingleRepo>;
}
async function fetchRepo(): Promise<Array<ISingleRepo>> {
  let res: Response | IRepos = await fetch('https://api.github.com/search/repositories?q=angular');
  res = await res.json() as IRepos;
  return res.items;
}

function createItem(text: string): any {
  const item = <HTMLElement>(document.createElement('li'));
  item.textContent = text;
  return item;
}

//const container = document.querySelector('.app .list');

async function main() {
  // step 1: fetch repo
  const res = await fetchRepo();
  // step 2: lặp qua mảng các item trả về
  // step 3: call hàm createItem sau đó truyền vào name của từng item ở mỗi vòng lặp
  // step 4: call hà                               m container.appendChild(item mà hàm createItem trả về)
  res.forEach((item: any) => {
    //const li = createItem(item.name);
   // container.appendChild(li);
    console.log(item);
  });
}

main();