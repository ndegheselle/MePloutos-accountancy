function l(t){const e={number:0,total:0,percentage:0};if((t==null?void 0:t.length)===0)return e;let a=0;for(const r of t)e.number+=1,e.total+=r.actualValue,a+=r.investedValue;return e.percentage=e.total/a*100-100,e}const o={getInvestmentsRecap:l};export{o as i};