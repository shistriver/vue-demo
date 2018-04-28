<template>
	<div class="calculator-box">
		<div class="calculator">
	        <div class="display">{{ display }}</div> 
	        <h1 class="brand">{{ appTitle }}</h1> 
	        <div class="keyboard">
	            <div class="panel-a">
	                <div class="top-buttons">
	                    <button class="btn primary" @click="clear"><span>C  </span></button> 
	                    <button class="btn" @click="dot"><span>.</span></button>
	                </div> 

	                <div class="numbers">
	                    <button class="btn" v-for="n in numbers" @click="setNumber(n)">
	                        <span>{{ n }}</span>
	                    </button>
	                </div>
	            </div> 

	            <div class="panel-b">
	                <button class="btn" @click="computeTotal(1)"><span>+</span></button> 
	                <button class="btn" @click="computeTotal(2)"><span>-</span></button> 
	                <button class="btn" @click="computeTotal(3)"><span>*</span></button> 
	                <button class="btn" @click="computeTotal(4)"><span>/</span></button> 
	                <button class="btn primary" @click="equal"><span>=</span></button>
	            </div>
	        </div>
	    </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		name: 'Calculator',
		data(){
			return {
				appTitle: 'Vue Calculator',
	            num: 0,
	            result: 0,
	            operate: 0, //判断输入状态的标志
	            calcul: 0,  //判断计算状态的标志
	            quit: 0,    //防止重复按键的标志
	            numshow: '0',
	            display: '0',
	            numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
			}
		},
		methods: {
            setNumber(num){
                var c = this.display;
                c = (c != '0') ? ((this.operate == 0) ? c : '') : '';
                c = c + num;
                this.display = c;

                this.operate = 0; //重置输入状态
                this.quit = 0;    //重置防止重复按键的标志
            },
            calculate(){
                this.numshow = this.display;
                if(this.num != 0 && this.quit != 1) {
                    //判断前一个运算数是否为零以及防重复按键的状态
                    switch(this.calcul){
                        case 1:
                            this.result = Number(this.num) + Number(this.numshow); //计算 "+"
                            break;
                        case 2:
                            this.result = Number(this.num) - Number(this.numshow); //计算 "-"
                            break;
                        case 3:
                            this.result = Number(this.num) * Number(this.numshow); //计算 "*"
                            break;
                        case 4:
                            if(this.numshow != "0"){
                                this.result = Number(this.num) / Number(this.numshow);
                            }else{
                                var errorHtml = '被除数不能为零！';
                                this.display = errorHtml;
                                setTimeout(function(){
                                    this.clear();
                                }, 3000);
                            }
                            break;
                    }
                    this.quit = 1; //避免重复按钮
                }else{
                    this.result = this.numshow;
                }

                this.numshow = String(this.result);
                this.display = String(this.result);
                this.num = this.result; //存储当前值
            },
            computeTotal(operateNum){
                this.calculate();
                this.operate = 1;
                // 1: 加法 2:减法 3:乘法 4: 除法
                this.calcul = operateNum;
            },
            dot(){
                var c = this.display;
                // 如果当前值不是 '0',且状态为0，则返回当前值，否则返回 '0'
                c = (c != 0) ? ((this.operate == 0) ? c : '0') : '0';
                for(var i = 0; i <= c.length; i++){
                    if(c.substr(i, 1) == '.'){
                        return false; //如果有则不再插入
                    }
                }
                c = c + '.';
                this.display = c;
                this.operate = 0;
            },
            equal(){ //等于
                this.calculate();
                this.operate = 1;
                this.num = 0;
                this.result = 0;
                this.numshow = '0';
            },
            clear(){
              this.result = 0;
              this.numshow = '0';
              this.display = '0';
              this.operate = 0;
            }
          }
	}
</script>
<style scoped>
.calculator-box{
	background: #000;
}
.calculator {
  width: 30rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem;
}
.calculator .display {
  height: 4rem;
  line-height: 4rem;
  margin: 0 .3rem;
  padding: 0 0;
  text-align: right;
  font-size: 1.5em;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.calculator .brand {
  margin: .6rem 0 0.3rem;
  padding: 0 .3rem;
  text-align: right;
  font-size: .65em;
  color: rgba(255, 255, 255, 0.85);
}
.calculator .keyboard {
  display: flex;
  flex-wrap: wrap;
}
.calculator .keyboard .btn {
  margin: 0;
  padding: 0;
  height: 4.6rem;
  line-height: 4rem;
  text-align: center;
  font-family: inherit;
  font-size: 1.25em;
  border: none;
  background: transparent;
  outline: none;
}
.calculator .keyboard .btn:hover span {
  background: #4d4d4d;
}
.calculator .keyboard .btn span {
  display: block;
  margin: .3rem;
  color: #fff;
  background: #333;
  border-radius: 3px;
  transition: background-color .4s;
}
.calculator .keyboard .btn.primary:hover span {
  background: #6bb6ff;
}
.calculator .keyboard .btn.primary span {
  background: dodgerblue;
}
.calculator .keyboard .panel-a {
  width: 75%;
}
.calculator .keyboard .panel-a .top-buttons .btn {
  width: 33.3%;
}
.calculator .keyboard .panel-a .top-buttons .btn:last-of-type {
  float: right;
}
.calculator .keyboard .panel-a .top-buttons .btn span {
  font-weight: bold;
}
.calculator .keyboard .panel-a .numbers {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: flex-end;
  align-content: flex-end;
}
.calculator .keyboard .panel-a .numbers .btn {
  width: 33.3%;
}
.calculator .keyboard .panel-a .numbers .btn:nth-child(10) {
  width: 100%;
}
.calculator .keyboard .panel-b {
  display: flex;
  flex-direction: column;
  width: 25%;
}
.calculator .keyboard .panel-b .btn {
  width: 100%;
}
.calculator .keyboard .panel-b .btn span {
  font-weight: bold;
}
</style>