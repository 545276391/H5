let totalWidth = (document.documentElement.scrollWidth>document.documentElement.clientWidth) 
	? document.documentElement.scrollWidth : document.documentElement.clientWidth;//获取屏幕的宽度 

  const DAILY = 30;
  const MONTHLY = 1;
	
	function Card(base_cost,flow_province,flow_country,call_count,flow_province_unit_price,flow_country_unit_price,call_unit_price,card_type,extra_flow){
		
		this.base_cost = base_cost;
	    this.getBaseCost = function(){
	      return this.base_cost;
	    }
	    
	    this.flow_province = flow_province;
	    this.getFlowProvince = function(){
		      return this.flow_province;
		    }
	    
	    this.flow_country = flow_country;
	    this.getFlowCountry = function(){
		      return this.flow_country;
		    }
	    
	    this.call_count = call_count;
	    this.getCallCount = function(){
		      return this.call_count;
		    }
	    
	    this.flow_province_unit_price = flow_province_unit_price;
	    this.getFlowProvinceUnitPrice = function(){
		      return this.flow_province_unit_price;
		    }
	    
	    this.flow_country_unit_price = flow_country_unit_price;
	    this.getFlowCountryUnitPrice = function(){
		      return this.flow_country_unit_price;
		    }
	    
	    this.call_unit_price = call_unit_price;
	    this.getCallUnitPrice = function(){
		      return this.call_unit_price;
		    }

      this.card_type = card_type;
      this.getCardType = function(){
        return this.card_type;
      }
      
      this.extra_flow = extra_flow;
	    this.getExtraFlow = function(){
	      return this.extra_flow;
	    }
	}

  /* let reg1 = /^(0|([1-9]\d*))(\.\d+)?$/; */
  let reg1 = /^[1-9]\d*$/;
  let reg2 = /^[1-9]\d*$/;

  let forecast_flow_count = parseFloat(prompt('请输入预计每月使用的流量（GB）', '2'));
  
  while(!reg1.test(forecast_flow_count)){
    alert("亲！别乱输入！");
    forecast_flow_count = parseFloat(prompt('请输入预计每月使用的流量（GB）', '2'));
  }

  let forecast_call_count = parseFloat(prompt('请输入预计的月通话时长（分钟）', '500'));

  while(!reg2.test(forecast_call_count)){
    alert("亲！能好好输入吗？");
    forecast_call_count = parseFloat(prompt('请输入预计的月通话时长（分钟）', '500'));
  }

  
	
	let tencent_big_king_card = new Card(19,0,0,0,1,1,0.1,DAILY,0);
	
  let tencent_heaven_king_card = new Card(59,0,0,800,1,1,0.1,DAILY,0);
  let alibaba_small_fish_card = new Card(9,0,0,0,1,2,0.1,DAILY,0);
  let alibaba_big_fish_card = new Card(19,0,1,100,1,2,0.1,DAILY,0);
	let alipay_small_baby_plus_card = new Card(16,0,1,0,15,15,0.1,MONTHLY,0.3);
	let alipay_big_baby_card = new Card(36,0,3,200,10,10,0.1,MONTHLY,0.3);
	let alipay_sesame_icecream_card = new Card(199,0,40,2000,0,0,0,MONTHLY,0);
  let alipay_flow_redpacket_card = new Card(9,0,0.3,0,7.5,7.5,0.075,MONTHLY,0);
  let alipay_media_redpacket_card = new Card(9,0,0,0,7.5,7.5,0.075,MONTHLY,0);
  let fliggy_small_card = new Card(19,0,2,0,15,15,0.1,MONTHLY,0);
  let fliggy_big_card = new Card(39,0,3,100,10,10,0.1,MONTHLY,0);
  
  let taobao_wonderful_tao_card = new Card(56,0,3,300,10,10,0.1,MONTHLY,0.2);
  let dingding_silver_card = new Card(29,0.75,0.75,50,100,100,0.1,MONTHLY,0.1);
  let dingding_gold_card = new Card(49,1.5,1.5,175,100,100,0.1,MONTHLY,0.2);
  let dingding_diamonds_card = new Card(99,4,4,500,100,100,0.1,MONTHLY,0.5);
  let jd_small_stronger_card = new Card(16,0,1,0,15,15,0.15,MONTHLY,0.5);
  let jd_big_stronger_card = new Card(56,0,3,300,10,10,0.1,MONTHLY,0.5);
  let jd_redpacket_card = new Card(9,0,0.3,0,7.5,7.5,0.075,MONTHLY,0);
  let jd_experience_card = new Card(5,0,0,0,1,2,0.1,DAILY,0);
  let baidu_small_god_card = new Card(28,0,2,100,10,10,0.1,MONTHLY,1);
  let baidu_goddess_card = new Card(37,0,2,200,10,10,0.1,MONTHLY,1);
  
  let baidu_big_god_card = new Card(198,0,20,2000,10,10,0.1,MONTHLY,1);
  let baidu_small_sage_card = new Card(9,0,0,0,1,15,0.1,DAILY,0);
  let baidu_big_sage_card = new Card(19,0,1,100,1,10,0.1,DAILY,0);
  let baidu_beyond_sage_card = new Card(59,0,4,300,1,10,0.1,DAILY,0);
  let mi_29_monthly_card = new Card(29,0,2,100,10,10,0.1,MONTHLY,0);
  let mi_59_monthly_card = new Card(59,0,4,300,10,10,0.1,MONTHLY,0);
  let mi_1_189_daily_card = new Card(5,0,0,0,1,2,0.1,DAILY,0);
  let mi_3_189_daily_card = new Card(5,0,0,0,3,2,0.1,DAILY,0);
  let mi_1_10010_daily_card = new Card(5,0,0,0,1,1,0.1,DAILY,0);
  let mi_3_10010_daily_card = new Card(5,0,0,0,3,3,0.1,DAILY,0);
  
  let weibo_v_plus_card = new Card(19,0,1,0,12,12,0.1,MONTHLY,0);
  let weibo_big_v_card = new Card(69,2,3,300,10,10,0.1,MONTHLY,0);
  let weibo_gold_v_card = new Card(199,0,20,2000,1,1,0.1,MONTHLY,0);
  let bilibili_22_card = new Card(22,0,1,100,1,1,0.1,DAILY,0);
  let bilibili_33_card = new Card(33,0,2,100,1,1,0.1,DAILY,0);
  let bilibili_small_tv_card = new Card(66,0,4,300,1,2,0.1,DAILY,0);
  let inke_small_in_card = new Card(29,0,1,0,1,2,0.1,DAILY,0);
  let inke_big_in_card = new Card(59,0,3,200,1,2,0.1,DAILY,0);
  let huajiao_small_huajiao_card = new Card(29,0,2,0,1,1,0.1,DAILY,0);
  let huajiao_big_huajiao_card = new Card(59,0,4,200,1,1,0.1,DAILY,0);
  
  let huajiao_pollen_card = new Card(10,0,0,0,2,100,0.1,DAILY,0);
  let youkutudou_small_cool_card = new Card(9,0,0,0,1,3,0.1,DAILY,0);
  let youkutudou_big_cool_card = new Card(29,0,2,0,1,2,0.1,DAILY,0);
  let mgtv_small_mang_card = new Card(9,0,0,0,1,10,0.1,DAILY,0);
  let mgtv_big_mang_card = new Card(29,0,2,0,1,10,0.1,DAILY,0);
  let icbc_dream_e_card = new Card(19,0,2,0,10,10,0.1,MONTHLY,0);
  let icbc_big_e_card = new Card(89,0,6,600,10,10,0.1,MONTHLY,0);
  let cmbchina_small_solicit_card = new Card(36,0,3,200,10,10,0.1,MONTHLY,0);
  let cmbchina_big_solicit_card = new Card(96,0,8,600,10,10,0.1,MONTHLY,0);
  let spdb_small_develop_card = new Card(36,0,2,100,10,10,0.1,MONTHLY,0);
  
  let spdb_big_develop_card = new Card(96,0,6,600,10,10,0.1,MONTHLY,0);
  let hxb_small_xia_card = new Card(36,0,3,0,10,10,0.1,MONTHLY,0);
  let hxb_big_xia_card = new Card(56,0,5,100,10,10,0.1,MONTHLY,0);
  let mucfc_mu_bull_card = new Card(39,0,2,150,10,10,0.1,MONTHLY,1);
  let jqka10_small_flush_card = new Card(28,0,2,0,10,10,0.1,MONTHLY,0);
  let jqka10_big_flush_card = new Card(58,0,3,300,10,10,0.1,MONTHLY,0);
  let jqka10_heaven_flush_card = new Card(118,0,8,800,10,10,0.1,MONTHLY,0);
  let didi_mini_orange_card = new Card(26,0,2,0,10,10,0.1,MONTHLY,0.5);
  let didi_small_orange_card = new Card(56,0,3,300,10,10,0.1,MONTHLY,0.5);
  let didi_big_orange_card = new Card(96,0,6,600,10,10,0.1,MONTHLY,0.5);
  
  let didi_small_king_card = new Card(58,2,1,500,100,100,0.1,MONTHLY,0);
  let didi_big_king_card = new Card(98,4,2,1000,100,100,0.1,MONTHLY,0);
  let toutiao_know_me_mini_card = new Card(9,0,0,0,1,2,0.1,DAILY,0);
  let toutiao_know_me_card = new Card(29,0,2,100,10,10,0.1,MONTHLY,0);
  let toutiao_know_me_plus_card = new Card(59,0,4,300,10,10,0.1,MONTHLY,0);
  let tv189_kankan_card = new Card(6,0,0,0,1,100,0.1,DAILY,0);
  let eleme_small_e_card = new Card(56,0,3,300,10,10,0.1,MONTHLY,0.5);
  let eleme_big_e_card = new Card(96,0,6,600,10,10,0.1,MONTHLY,0.5);
  let eleme_fengniao_card = new Card(56,2,1,400,10,10,0.1,MONTHLY,0);
  let eleme_fengwang_card = new Card(96,4,2,1000,10,10,0.1,MONTHLY,0);
  
  let meituan_small_mei_card = new Card(36,0,2,100,10,10,0.1,MONTHLY,0.5);
  let meituan_big_mei_card = new Card(96,0,6,600,10,10,0.1,MONTHLY,0.5);
  let ctrip_small_cheng_card = new Card(28,0,2,0,10,10,0.1,MONTHLY,1);
  let ctrip_big_cheng_card = new Card(88,0,6,500,10,10,0.1,MONTHLY,2);
  let ymm56_small_man_card = new Card(56,0,2,400,10,10,0.1,MONTHLY,0);
  let ymm56_big_man_card = new Card(96,0,5,800,10,10,0.1,MONTHLY,0);
  let woniu_small_card = new Card(19,0,1.5,0,1,12,0.1,DAILY,1);
  let woniu_big_card = new Card(59,0,4,200,1,10,0.1,DAILY,1);
  let media_app_20_card = new Card(20,0,0,0,15,15,0.1,MONTHLY,0);
  let media_app_50_card = new Card(50,0,3,0,15,15,0.1,MONTHLY,0);
  
  let sf_big_feng_card = new Card(46,0,4,100,10,10,0.1,MONTHLY,1);
  let yto_small_yuan_card = new Card(16,0,1,0,15,15,0.1,MONTHLY,0.6);
  let yto_yuan_card = new Card(46,0,3,100,10,10,0.1,MONTHLY,0.6);
	let media_information_app_card = new Card(9,0,0,0,1,100,0.1,DAILY,0);
	let ruwe_snacks_card = new Card(19,0,1,0,10,10,0.1,MONTHLY,0);
  let ruwe_non_staple_food_card = new Card(59,0,3,300,10,10,0.1,MONTHLY,0);
  let ruwe_staple_food_card = new Card(89,0,3,800,10,10,0.1,MONTHLY,0);
  let other_card = new Card(9,0,0,0,1,2,0.1,DAILY,0);

  function showCardName(index){
      switch(index){
        case 0:
          return tencent_big_king_card;
        case 1:
          return tencent_heaven_king_card;
        case 2:
          return alibaba_small_fish_card;
        case 3:
          return alibaba_big_fish_card;
        case 4:
          return alipay_small_baby_plus_card;
        case 5:
          return alipay_big_baby_card;
        case 6:
          return alipay_sesame_icecream_card;
        case 7:
          return alipay_flow_redpacket_card;
        case 8:
          return alipay_media_redpacket_card;
        case 9:
          return fliggy_small_card;
        case 10:
          return fliggy_big_card;
        case 11:
          return taobao_wonderful_tao_card;
        case 12:
          return dingding_silver_card;
        case 13:
          return dingding_gold_card;
        case 14:
          return dingding_diamonds_card;
        case 15:
          return jd_small_stronger_card;
        case 16:
          return jd_big_stronger_card;
        case 17:
          return jd_redpacket_card;
        case 18:
          return jd_experience_card;
        case 19:
          return baidu_small_god_card;
        case 20:
          return baidu_goddess_card;
        case 21:
          return baidu_big_god_card;
        case 22:
          return baidu_small_sage_card;
        case 23:
          return baidu_big_sage_card;
        case 24:
          return baidu_beyond_sage_card;
        case 25:
          return mi_29_monthly_card;
        case 26:
          return mi_59_monthly_card;
        case 27:
          return mi_1_189_daily_card;
        case 28:
          return mi_3_189_daily_card;
        case 29:
          return mi_1_10010_daily_card;
        case 30:
          return mi_3_10010_daily_card;
        case 31:
          return weibo_v_plus_card;
        case 32:
          return weibo_big_v_card;
        case 33:
          return weibo_gold_v_card;
        case 34:
          return bilibili_22_card;
        case 35:
          return bilibili_33_card;
        case 36:
          return bilibili_small_tv_card;
        case 37:
          return inke_small_in_card;
        case 38:
          return inke_big_in_card;
        case 39:
          return huajiao_small_huajiao_card;
        case 40:
          return huajiao_big_huajiao_card;
        case 41:
          return huajiao_pollen_card;
        case 42:
          return youkutudou_small_cool_card;
        case 43:
          return youkutudou_big_cool_card;
        case 44:
          return mgtv_small_mang_card;
        case 45:
          return mgtv_big_mang_card;
        case 46:
          return icbc_dream_e_card;
        case 47:
          return icbc_big_e_card;
        case 48:
          return cmbchina_small_solicit_card;
        case 49:
          return cmbchina_big_solicit_card;
        case 50:
          return spdb_small_develop_card;
        case 51:
          return spdb_big_develop_card;
        case 52:
          return hxb_small_xia_card;
        case 53:
          return hxb_big_xia_card;
        case 54:
          return mucfc_mu_bull_card;
        case 55:
          return jqka10_small_flush_card;
        case 56:
          return jqka10_big_flush_card;
        case 57:
          return jqka10_heaven_flush_card;
        case 58:
          return didi_mini_orange_card;
        case 59:
          return didi_small_orange_card;
        case 60:
          return didi_big_orange_card;
        case 61:
          return didi_small_king_card;
        case 62:
          return didi_big_king_card;
        case 63:
          return toutiao_know_me_mini_card;
        case 64:
          return toutiao_know_me_card;
        case 65:
          return toutiao_know_me_plus_card;
        case 66:
          return tv189_kankan_card;
        case 67:
          return eleme_small_e_card;
        case 68:
          return eleme_big_e_card;
        case 69:
          return eleme_fengniao_card;
        case 70:
          return eleme_fengwang_card;
        case 71:
          return meituan_small_mei_card;
        case 72:
          return meituan_big_mei_card;
        case 73:
          return ctrip_small_cheng_card;
        case 74:
          return ctrip_big_cheng_card;
        case 75:
          return ymm56_small_man_card;
        case 76:
          return ymm56_big_man_card;
        case 77:
          return woniu_small_card;
        case 78:
          return woniu_big_card;
        case 79:
          return media_app_20_card;
        case 80:
          return media_app_50_card;
        case 81:
          return sf_big_feng_card;
        case 82:
          return yto_small_yuan_card;
        case 83:
          return yto_yuan_card; 
        case 84:
          return media_information_app_card;
        case 85:
          return ruwe_snacks_card;
        case 86:
          return ruwe_non_staple_food_card;
        case 87:
          return ruwe_staple_food_card;
        case 88:
          return other_card;
        default:
          return "?";
      }
  }
	
	function CalculationCallCost(card){
		if(card.call_count>forecast_call_count){
  			return 0;
	  }else {
			  return (forecast_call_count-card.call_count)*card.call_unit_price;
	  } 
	}
	
	function CalculationFlowCost(card){
    if(card.flow_country >= forecast_flow_count){
        return 0;
    }else if(card.flow_province >= forecast_flow_count-card.flow_country){
        return 0;
    }else if(forecast_flow_count-card.flow_country-card.flow_province-card.extra_flow<=0){
        return 0;
    }else if(card.card_type == DAILY && forecast_flow_count<=DAILY){
        return (Math.floor(DAILY/forecast_flow_count)) * (forecast_flow_count-card.flow_country-card.flow_province) * card.flow_province_unit_price;
    }else if(card.card_type == DAILY && forecast_flow_count>DAILY){
        return DAILY * card.flow_province_unit_price;
    }else{
    	  return (forecast_flow_count-card.flow_country-card.flow_province)*card.flow_province_unit_price;
    }
		
	}

	function CalculationSumCost(card){
		return CalculationFlowCost(card) + CalculationCallCost(card) + card.base_cost;
	}
	
  
  

  // Creation of data model
  Ext.define('StudentDataModel', {
     extend: 'Ext.data.Model',
     fields: [
     {name: 'cardGroup', mapping : 'cardGroup'},
     {name: 'cardName', mapping : 'cardName'},
     {name: 'baseCost', mapping : 'baseCost'},
     {name: 'flowProvince', mapping : 'flowProvince'},
     {name: 'flowCountry', mapping : 'flowCountry'},
     {name: 'call', mapping : 'call'},
     {name: 'flowCost', mapping : 'flowCost'},
     {name: 'callCost', mapping : 'callCost'},
     {name: 'sumCost', mapping : 'sumCost'},
     {name: 'tip', mapping : 'tip'},
     ]
  });

      Ext.onReady(function(){

         // Store data
         let myData = [
            { cardGroup : "腾讯<br/>+<br/>联通", cardName : "大王卡<br/>月租19元;<br/>国内流量1元/G(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(0)), tip : "腾讯应用免流;<br/>一年后或预存300元升级;<br/>可添加3个腾讯王卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元及以上送50元"},
            
            { cardGroup : "腾讯<br/>+<br/>联通", cardName : "天王卡<br/>月租59元,含800分钟通话;<br/>国内流量1元/G(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(1)), tip : "腾讯应用免流;<br/>一年后或预存300元升级;<br/>可添加3个腾讯王卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元及以上送50元"},
            { cardGroup : "阿里文娱<br/>+<br/>电信", cardName : "小鱼卡<br/>月租9元;<br/>省内流量1元800M,省外2元800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(2)), tip : "阿里文娱旗下应用免流(UC浏览器/优酷/虾米/高德/书旗);<br/>首月免月租,首充50元及以上送50元"},
            { cardGroup : "阿里文娱<br/>+<br/>电信", cardName : "大鱼卡<br/>月租19元,含100分钟通话、1G国内流量;<br/>省内流量1元800M,省外2元800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(3)), tip : "阿里文娱旗下应用免流(UC浏览器/优酷/虾米/高德/书旗);<br/>首月免月租,首充50元及以上送50元"},
            { cardGroup : "支付宝<br/>+<br/>联通", cardName : "小宝+卡<br/>月租16元,含1G国内流量;<br/>国内流量15元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(4)), tip : "+3元优酷免流;<br/>线下用支付宝买单每笔送20M国内流量,根据支付宝会员等级划分每月最高送若干(12/15/18/20)笔流量;<br/>可添加3个联通用户亲情号,亲情号通话免费;<br/>首月免月租,首充19元得50元,激活当月及次月各送1G国内流量"},
            { cardGroup : "支付宝<br/>+<br/>联通", cardName : "大宝卡<br/>月租36元,含200分钟通话、3G国内流量;(升级后)<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(5)), tip : "+3元优酷免流;<br/>一年后或预存200元升级;<br/>线下用支付宝买单每笔送20M国内流量,根据支付宝会员等级划分每月最高送若干(12/15/18/20)笔流量;<br/>可添加3个联通用户亲情号,亲情号通话免费;<br/>首月免月租,首充19元得50元,激活当月及次月各送1G国内流量"},
            { cardGroup : "支付宝<br/>+<br/>联通", cardName : "芝麻冰淇淋信用套餐(月租199元,通话时间不限,流量不限", sumCost : CalculationSumCost(showCardName(6)), tip : "首月资费0月租,0.15/分钟,15元/G"},
            { cardGroup : "支付宝<br/>+<br/>电信", cardName : "流量红包卡<br/>月租9元,含300M国内流量;<br/>国内流量15元/G,0.15元/分钟", sumCost : CalculationSumCost(showCardName(7)), tip : "套餐外消费返还50%至支付宝余额中;<br/>首月免月租"},
            { cardGroup : "支付宝<br/>+<br/>电信", cardName : "视频红包卡<br/>月租9元;<br/>国内流量15元/G,0.15元/分钟", sumCost : CalculationSumCost(showCardName(8)), tip : "优酷省内免流;<br/>套餐外消费返还50%至支付宝余额中;<br/>首月免月租"},
            { cardGroup : "飞猪<br/>+<br/>联通", cardName : "飞猪小卡<br/>月租19元,含2G国内流量;<br/>国内流量15元/G,0.1元/分钟,国际流量25元/天;", sumCost : CalculationSumCost(showCardName(9)), tip : "每充值100元送25元国际专款;<br/>双十一期间存200元送100元以及100元国际专款;<br/>首月免月租"},
            { cardGroup : "飞猪<br/>+<br/>联通", cardName : "飞猪大卡<br/>月租39元,含100分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(10)), tip : "每充值100元送25元国际专款;<br/>双十一期间存200元送100元以及100元国际专款;<br/>首月免月租"},
            
            { cardGroup : "淘宝<br/>+<br/>联通", cardName : "畅淘卡<br/>月租56元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(11)), tip : "手机淘宝平台（含天猫/聚划算/飞猪）购物每次满100元送10M国内流量,每月最高10次;<br/>每次在非wifi环境下观看淘宝直播送10M国内流量,每月最高10次;<br/>首月免月租,首充50元及以上送50元"},
            { cardGroup : "钉钉<br/>+<br/>联通", cardName : "银卡<br/>月租29元,含50分钟通话、750M国内流量、750M省内流量;<br/>国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(12)), tip : "套餐还包含50分钟钉钉普通电话、根据企业等级划分还包含若干国内流量(100M/200M/500M)以及智能办公电话通话时长(100/200/300分钟);<br/>首月免月租,首充100元得200元"},
            { cardGroup : "钉钉<br/>+<br/>联通", cardName : "金卡<br/>月租49元,含175分钟通话、1.5G国内流量、1.5G省内流量;<br/>国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(13)), tip : "套餐还包含175分钟钉钉普通电话、根据企业等级划分还包含若干国内流量（500M/1G/1.5G）以及智能办公电话通话时长(100/200/300分钟);<br/>首月免月租,首充100元得200元"},
            { cardGroup : "钉钉<br/>+<br/>联通", cardName : "钻石卡<br/>月租99元,含500分钟通话、4G国内流量、4G省内流量;<br/>国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(14)), tip : "套餐还包含500分钟钉钉普通电话、根据企业等级划分还包含若干国内流量(1G/2G/3G)以及智能办公电话通话时长(100/200/300分钟);<br/>首月免月租,首充100元得200元"},
            { cardGroup : "京东<br/>+<br/>联通", cardName : "小强卡<br/>月租16元,含1G国内流量;<br/>国内流量15元/G,0.15/分钟", sumCost : CalculationSumCost(showCardName(15)), tip : "京东购物笔笔送流量,每月最多送10笔,根据京东会员等级划分,每笔送若干(站内任意支付或站外京东支付50M/站内任意支付200M或站外京东支付50M/站内或站外京东支付200M/站内非京东支付50M)国内流量;<br/>首月免月租,首充100元得200元"},
            { cardGroup : "京东<br/>+<br/>联通", cardName : "大强卡<br/>月租56元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(16)), tip : "京东购物笔笔送流量,每月最多送10笔,根据京东会员等级划分,每笔送若干(站内任意支付或站外京东支付50M/站内任意支付200M或站外京东支付50M/站内或站外京东支付200M/站内非京东支付50M)国内流量;<br/>首月免月租,首充100元得200元"},
            { cardGroup : "京东<br/>+<br/>电信", cardName : "红包卡<br/>月租9元,含300M国内流量;<br/>国内流量15元/G,0.15元/分钟", sumCost : CalculationSumCost(showCardName(17)), tip : "套餐外消费返还50%至京东账户中;<br/>首月免月租"},
            { cardGroup : "京东<br/>+<br/>电信", cardName : "体验卡<br/>月租5元;<br/>省内流量1元/800M,国内流量2元/800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(18)), tip : "待定......"},
            { cardGroup : "百度<br/>+<br/>联通", cardName : "小神卡<br/>月租28元,含100分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(19)), tip : "百度地图每连续签到3天送50M国内流量;<br/>百度糯米每笔消费送30M流量,每月最高15次,糯米客户端签到每天送2M流量;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充100元得200元"},
            { cardGroup : "百度<br/>+<br/>联通", cardName : "女神卡<br/>月租37元,含200分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(20)), tip : "百度地图每连续签到3天送50M国内流量;<br/>百度糯米每笔消费送30M流量,每月最高15次,糯米客户端签到每天送2M流量;<br/>赠送百度糯米白金会员;<br/>情人节/女生节/七夕/圣诞节流量全免;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元得100元"},
            
            { cardGroup : "百度<br/>+<br/>联通", cardName : "大神卡<br/>月租198元,含2000分钟通话、20G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(21)), tip : "百度地图每连续签到3天送50M国内流量;<br/>百度糯米每笔消费送30M流量,每月最高15次,糯米客户端签到每天送2M流量;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月套餐不生效,免费体验3G国内流量以及300分钟通话,首充100元得200元"},
            { cardGroup : "百度<br/>+<br/>联通", cardName : "小圣卡<br/>月租9元;<br/>省内流量1元/800M,国内流量15元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(22)), tip : "百度应用及爱奇艺免流免流;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元得100元,6个月内每月送100分钟通话"},
            { cardGroup : "百度<br/>+<br/>联通", cardName : "大圣卡<br/>月租19元,含100分钟通话、1G国内流量;<br/>省内流量1元/800M,国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(23)), tip : "百度应用及爱奇艺免流;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元得100元,6个月内每月送100分钟通话"},
            { cardGroup : "百度<br/>+<br/>联通", cardName : "超圣卡<br/>月租59元,含300分钟通话、4G国内流量;<br/>省内流量1元/800M,国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(24)), tip : "百度应用及爱奇艺免流;<br/>可添加3个百度神卡/圣卡用户亲情号,亲情号通话免费;<br/>首月免月租,首充50元得100元,6个月内每月送100分钟通话"},
            { cardGroup : "小米<br/>+<br/>联通", cardName : "29元套餐米粉卡<br/>月租29元,含100分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(25)), tip : "每月在MIUI内使用小米APP产生的流量次月全部返还;<br/>首月免月租,首充100元送50元话费+50元小米商城现金券,送6个月小米云服务会员"},
            { cardGroup : "小米<br/>+<br/>联通", cardName : "59元套餐米粉卡<br/>月租59元,含300分钟通话、4G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(26)), tip : "每月在MIUI内使用小米APP产生的流量次月全部返还;<br/>首月免月租,首充100元送50元话费+50元小米商城现金券,送6个月小米云服务会员"},
            { cardGroup : "小米<br/>+<br/>电信", cardName : "1元日租米粉卡<br/>月租5元;<br/>省内流量1元/800M,省外2元/800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(27)), tip : "待续..."},
            { cardGroup : "小米<br/>+<br/>电信", cardName : "不限量日租米粉卡<br/>月租5元;<br/>省内流量3元不限量,省外2元/800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(28)), tip : "待续..."},
            { cardGroup : "小米<br/>+<br/>联通", cardName : "1元日租米粉卡<br/>月租5元;<br/>国内流量1元/800M(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(29)), tip : "半年后或预存200元升级"},
            { cardGroup : "小米<br/>+<br/>联通", cardName : "不限量日租米粉卡<br/>月租5元;<br/>国内流量3元不限量,0.1元/分钟", sumCost : CalculationSumCost(showCardName(30)), tip : "待续..."},
            
            { cardGroup : "新浪微博<br/>+<br/>联通", cardName : "V+卡<br/>月租19元,含1G国内流量;<br/>国内流量12元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(31)), tip : "新浪微博、优酷免流;<br/>首月免月租,当月及次月每月送500M国内流量,首充50得100元"},
            { cardGroup : "新浪微博<br/>+<br/>联通", cardName : "大V卡<br/>月租69元,含300分钟通话、3G国内流量、2G省内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(32)), tip : "新浪微博、优酷免流;<br/>首月免月租,当月及次月每月送500M国内流量,首充50得100元"},
            { cardGroup : "新浪微博<br/>+<br/>联通", cardName : "金V卡<br/>月租199元,含1000分钟通话、20G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(33)), tip : "新浪微博、优酷免流;<br/>首月套餐不生效,免费体验3G国内流量以及300分钟通话,首充50得100元"},
            { cardGroup : "哔哩哔哩<br/>+<br/>联通", cardName : "22卡<br/>月租22元,含100分钟通话、1G国内流量;<br/>国内流量1元/500M(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(34)), tip : "哔哩哔哩免流;<br/>可添加3个哔哩哔哩卡用户基友号,基友号通话免费;<br/>一年后或预存200元升级;<br/>赠送1个B坷垃、133个辣条;<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "哔哩哔哩<br/>+<br/>联通", cardName : "33卡<br/>月租33元,含100分钟通话、2G国内流量;<br/>国内流量1元/500M(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(35)), tip : "哔哩哔哩免流;<br/>可添加3个哔哩哔哩卡用户基友号,基友号通话免费;<br/>一年后或预存200元升级;<br/>赠送2个B坷垃、10个亿圆、33个辣条;<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "哔哩哔哩<br/>+<br/>联通", cardName : "小电视卡<br/>月租66元,含300分钟通话、4G国内流量;<br/>国内流量1元/500M(升级后),0.1元/分钟", sumCost : CalculationSumCost(showCardName(36)), tip : "哔哩哔哩免流;<br/>可添加3个哔哩哔哩卡用户基友号,基友号通话免费;<br/>一年后或预存200元升级;<br/>赠送2个B坷垃、33个亿圆、233个辣条;<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "映客直播<br/>+<br/>联通", cardName : "小映卡<br/>月租29元,含1G国内流量;<br/>省内流量1元/500M,省外2元/500M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(37)), tip : "万钻抽奖1次,映客经验1000、个性头衔15天;<br/>首月免月租,6个月内每月送1G国内流量,首充50得100元"},
            { cardGroup : "映客直播<br/>+<br/>联通", cardName : "大映卡<br/>月租59元,含200分钟通话、3G国内流量;<br/>省内流量1元/500M,省外2元/500M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(38)), tip : "万钻抽奖3次、映客经验3000、个性头衔30天;<br/>首月免月租,6个月内每月送1G国内流量,首充50得100元"},
            { cardGroup : "花椒直播<br/>+<br/>联通", cardName : "小花椒卡<br/>月租29元,含2G国内流量;<br/>省内流量1元/500M,省外1元/100M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(39)), tip : "1000经验值、1000阳光值、1次百万花椒豆抽奖机会;<br/>首月免月租,6个月内每月送1G国内流量,首充50得100元"},
            { cardGroup : "花椒直播<br/>+<br/>联通", cardName : "大花椒卡<br/>月租59元,含200分钟通话、4G国内流量;<br/>省内流量1元/500M,省外1元/100M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(40)), tip : "1500经验值、1500阳光值、3次百万花椒豆抽奖机会;<br/>首月免月租,6个月内每月送1G国内流量,首充50得100元"},
            
            { cardGroup : "花椒直播<br/>+<br/>联通", cardName : "花粉卡<br/>月租10元;<br/>省内流量2元/2G,省外0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(41)), tip : "首月免月租,送1G国内流量,首充50得100元"},
            { cardGroup : "优酷土豆<br/>+<br/>联通", cardName : "小酷卡<br/>月租9元;<br/>省内流量1元/500M,省外3元/500M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(42)), tip : "优酷、微博免流;<br/>首月免月租,首充50得100元"},
            { cardGroup : "优酷土豆<br/>+<br/>联通", cardName : "大酷卡<br/>月租29元,含2G国内流量;<br/>省内流量1元/500M,省外2元/500M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(43)), tip : "优酷、微博免流;<br/>首月免月租,首充50得100元"},
            { cardGroup : "芒果TV<br/>+<br/>联通", cardName : "小芒卡<br/>月租9元;<br/>省内流量1元/500M,省外1元/100M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(44)), tip : "芒果TV、新浪微博免流;<br/>首月免月租,6个月内每月送100分钟通话,首充50得80元话费以及2个月芒果会员/首充100得150元话费以及5个月芒果会员"},
            { cardGroup : "芒果TV<br/>+<br/>联通", cardName : "大芒卡<br/>月租29元,含2G国内流量;<br/>省内流量1元/500M,省外1元/100M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(45)), tip : "芒果TV、新浪微博免流;<br/>首月免月租,6个月内每月送100分钟通话,首充50得80元话费以及2个月芒果会员/首充100得150元话费以及5个月芒果会员"},
            { cardGroup : "工商银行<br/>+<br/>联通", cardName : "梦想e卡<br/>月租19元,含2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(46)), tip : "工行指定APP免流;<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "工商银行<br/>+<br/>联通", cardName : "大e卡<br/>月租89元,含600分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(47)), tip : "工行指定APP免流;<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "招商银行<br/>+<br/>联通", cardName : "小招卡<br/>月租36元,含200分钟通话、3G国内流量(升级后);<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(48)), tip : "一年后或预存300元升级;<br/>首月免月租,当月及次月每月送1G国内流量,首充50得100元"},
            { cardGroup : "招商银行<br/>+<br/>联通", cardName : "大招卡<br/>月租96元,含600分钟通话、8G国内流量(升级后);<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(49)), tip : "半年后或预存200元升级;<br/>首月免月租,当月及次月每月送1G国内流量,首充50得100元"},
            { cardGroup : "浦发银行<br/>+<br/>联通", cardName : "小发卡<br/>月租36元,含100分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(50)), tip : "首月免月租,首充50得100元"},
            
            { cardGroup : "浦发银行<br/>+<br/>联通", cardName : "大发卡<br/>月租96元,含600分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(51)), tip : "首月免月租,首充50得100元"},
            { cardGroup : "华夏银行<br/>+<br/>联通", cardName : "小夏卡<br/>月租36元,含3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(52)), tip : "首月免月租,当月送50分钟通话,首充50得100元"},
            { cardGroup : "华夏银行<br/>+<br/>联通", cardName : "大夏卡<br/>月租56元,含100分钟通话、5G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(53)), tip : "首月免月租,当月送50分钟通话,首充50得100元"},
            { cardGroup : "招联金融<br/>+<br/>联通", cardName : "招联牛卡<br/>月租39元,含150分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(54)), tip : "APP内每签到5次送100M国内流量;<br/>每月按期还款送500M国内流量;首月免月租,送1G国内流量,首充50得100元"},
            { cardGroup : "同花顺<br/>+<br/>联通", cardName : "小顺卡<br/>月租28元,含2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(55)), tip : "3个月同花顺沪深level2会员;<br/>首月免月租,当月及次月每月送500M国内流量,首充50得100元"},
            { cardGroup : "同花顺<br/>+<br/>联通", cardName : "大顺卡<br/>月租58元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(56)), tip : "3个月同花顺沪深level2会员;<br/>首月免月租,当月及次月每月送500M国内流量,首充50得100元"},
            { cardGroup : "同花顺<br/>+<br/>联通", cardName : "天顺卡<br/>月租118元,含800分钟通话、8G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(57)), tip : "3个月同花顺沪深level2会员;<br/>首月免月租,当月及次月每月送500M国内流量,首充50得100元"},
            { cardGroup : "滴滴<br/>+<br/>联通", cardName : "mini橙卡<br/>月租26元,含2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(58)), tip : "每次打车送50M国内流量,根据滴滴会员等级划分每月最多送(10/20/40次);<br/>首月免月租,6个月内每月送100分钟通话,首充50得100元"},
            { cardGroup : "滴滴<br/>+<br/>联通", cardName : "小橙卡<br/>月租56元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(59)), tip : "每次打车送50M国内流量,根据滴滴会员等级划分每月最多送(10/20/40次);<br/>首月免月租,当月及次元每月送500M国内流量,首充50得100元"},
            { cardGroup : "滴滴<br/>+<br/>联通", cardName : "大橙卡<br/>月租96元,含600分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(60)), tip : "每次打车送50M国内流量,根据滴滴会员等级划分每月最多送(10/20/40次);<br/>首月免月租,当月及次元每月送500M国内流量,首充50得100元"},
            
            { cardGroup : "滴滴<br/>+<br/>联通", cardName : "小王卡<br/>月租58元,含500分钟通话、1G国内流量、2G省内流量;<br/>国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(61)), tip : "客户端内与乘客通话费用全免;<br/>首月免月租,首充100得200元"},
            { cardGroup : "滴滴<br/>+<br/>联通", cardName : "大王卡<br/>月租98元,含1000分钟通话、2G国内流量、4G省内流量;<br/>国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(62)), tip : "客户端内与乘客通话费用全免;<br/>首月免月租,首充100得200元"},
            { cardGroup : "今日头条<br/>+<br/>联通", cardName : "懂我卡Mini<br/>月租9元<br/>省内流量1元/800M,省外2元/800M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(63)), tip : "今日头条、西瓜视频、火山小视频、内涵段子、抖音等APP免流;<br/>首月免月租,送100分钟通话,首充50得100元"},
            { cardGroup : "今日头条<br/>+<br/>联通", cardName : "懂我卡<br/>月租29元,含100分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(64)), tip : "今日头条、西瓜视频、火山小视频、内涵段子、抖音等APP免流;<br/>首月免月租,送100分钟通话,首充50得100元"},
            { cardGroup : "今日头条<br/>+<br/>联通", cardName : "懂我卡Plus<br/>月租59元,含300分钟通话、4G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(65)), tip : "今日头条、西瓜视频、火山小视频、内涵段子、抖音等APP免流;<br/>首月免月租,送100分钟通话,首充50得100元"},
            { cardGroup : "天翼资讯<br/>+<br/>联通", cardName : "看看卡<br/>月租6元;<br/>省内流量1元/500M,国内流量0.1元/M,0.1元/分钟", sumCost : CalculationSumCost(showCardName(66)), tip : "天翼视讯免流;<br/>首月免月租,送1G国内流量"},
            { cardGroup : "饿了么<br/>+<br/>联通", cardName : "小饿卡<br/>月租56元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(67)), tip : "每单外卖送50M国内流量,每月最多送10笔;<br/>首月免月租,首充50得100元"},
            { cardGroup : "饿了么<br/>+<br/>联通", cardName : "大饿卡<br/>月租96元,含600分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(68)), tip : "每单外卖送50M国内流量,每月最多送10笔;<br/>首月免月租,首充50得100元"},
            { cardGroup : "饿了么<br/>+<br/>联通", cardName : "蜂鸟卡<br/>月租56元,含400分钟通话、1G国内流量、2G省内流量、100条短信;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(69)), tip : "蜂鸟APP内与订餐用户通话全免;<br/>完成APP内指定任务另送若干国内流量;<br/>首月免月租,3个月内每月送1G国内流量,首充50得100元"},
            { cardGroup : "饿了么<br/>+<br/>联通", cardName : "蜂王卡<br/>月租96元,含1000分钟通话、2G国内流量、4G省内流量、200条短信;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(70)), tip : "蜂鸟APP内与订餐用户通话全免;<br/>完成APP内指定任务另送若干国内流量;<br/>首月免月租,3个月内每月送1G国内流量,首充50得100元"},
            
            { cardGroup : "美团<br/>+<br/>联通", cardName : "小美卡<br/>月租36元,含100分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(71)), tip : "每次通过银行卡快捷支付送50M国内流量,每月最多送10笔;<br/>首月免月租,首充50得100元"},
            { cardGroup : "美团<br/>+<br/>联通", cardName : "大美卡<br/>月租96元,含600分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(72)), tip : "每次通过银行卡快捷支付送50M国内流量,每月最多送10笔;<br/>首月免月租,首充50得100元"},
            { cardGroup : "携程<br/>+<br/>联通", cardName : "小程卡<br/>月租28元,含2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(73)), tip : "每次通过携程订酒店机票送200M国内流量,每月最多送5笔;<br/>首月免月租,首充50送价值99元会员权益"},
            { cardGroup : "携程<br/>+<br/>联通", cardName : "大程卡<br/>月租88元,含500分钟通话、6G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(74)), tip : "每次通过携程订酒店机票送200M国内流量,每月最多送10笔;<br/>首月免月租,首充50送价值99元会员权益"},
            { cardGroup : "运满满<br/>+<br/>联通", cardName : "小满卡<br/>月租56元,含400分钟通话、2G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(75)), tip : "运满满APP内与货主通话全免;<br/>首月免月租,首充50得100元"},
            { cardGroup : "运满满<br/>+<br/>联通", cardName : "大满卡<br/>月租96元,含800分钟通话、5G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(76)), tip : "运满满APP内与货主通话全免;<br/>首月免月租,首充50得100元"},
            { cardGroup : "蜗牛移动<br/>+<br/>联通", cardName : "小蜗牛卡<br/>月租19元,含1.5G国内流量;<br/>省内流量1元/500M,省外12元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(77)), tip : "参与游戏活动可额外获得1G国内流量;<br/>首月免月租,首充50得100元"},
            { cardGroup : "蜗牛移动<br/>+<br/>联通", cardName : "大蜗牛卡<br/>月租59元,含200分钟通话、4G国内流量;<br/>省内流量1元/500M,省外10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(78)), tip : "参与游戏活动可额外获得1G国内流量;<br/>首月免月租,首充50得100元"},
            { cardGroup : "各大视频<br/>+<br/>联通", cardName : "畅视20元卡<br/>月租20元;<br/>国内流量15元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(79)), tip : "优酷/乐视/BesTV/沃视频/搜狐/华数手机电视/CIBN手机电视/芒果TV/PP视频等APP标清视频免流"},
            { cardGroup : "各大视频<br/>+<br/>联通", cardName : "畅视50元卡<br/>月租50元,含3G国内流量;<br/>国内流量15元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(80)), tip : "优酷/乐视/BesTV/沃视频/搜狐/华数手机电视/CIBN手机电视/芒果TV/PP视频等APP标清视频免流"}, 
            
            { cardGroup : "顺丰<br/>+<br/>联通", cardName : "大丰卡<br/>月租46元,含100分钟通话、4G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(81)), tip : "每次收发顺丰快递送100M国内流量,每月最多送10笔;<br/>送顺丰钻石会员;<br/>首月免月租,首充50元及以上送价值35元的顺丰快递券"}, 
            { cardGroup : "圆通<br/>+<br/>联通", cardName : "小圆卡<br/>月租16元,含1G国内流量;<br/>国内流量15元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(82)), tip : "每寄一笔圆通快递送30M国内流量,每月最多送20笔;<br/>圆通会员积分翻倍;<br/>首月免月租,首充50元及以上送价值30元的圆通快递券"}, 
            { cardGroup : "圆通<br/>+<br/>联通", cardName : "圆卡<br/>月租46元,含100分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost : CalculationSumCost(showCardName(83)), tip : "每寄一笔圆通快递送30M国内流量,每月最多送20笔;<br/>圆通会员积分翻倍;<br/>首月免月租,首充50元及以上送价值30元的圆通快递券"}, 
            { cardGroup : "优酷/爱奇艺/乐视/PPTV/斗鱼/今日头条<br/>+<br/>电信", cardName : "酷视卡/爱享卡/小乐卡/聚力卡/斗鱼卡/关心卡<br/>月租9元;<br/>省内流量1元/500M,省外0.1元/M,0.1元/分钟", sumCost :CalculationSumCost(showCardName(84)), tip : "优酷/爱奇艺/乐视/PPTV/斗鱼/今日头条等APP省内免流;<br/>首月免月租,送1G国内流量"},
            { cardGroup : "口粮<br/>+<br/>联通", cardName : "零食卡<br/>月租19元,含1G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost :CalculationSumCost(showCardName(85)), tip : "首月免月租,首充50元得100元;<br/>送88MB粮票,可兑换视频网站会员或卡券等;"},
            { cardGroup : "口粮<br/>+<br/>联通", cardName : "副食卡<br/>月租59元,含300分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost :CalculationSumCost(showCardName(86)), tip : "首月免月租,首充50元得100元,送88MB粮票,可兑换视频网站会员或卡券等;"},
            { cardGroup : "口粮<br/>+<br/>联通", cardName : "主食卡<br/>月租89元,含800分钟通话、3G国内流量;<br/>国内流量10元/G,0.1元/分钟", sumCost :CalculationSumCost(showCardName(87)), tip : "首月免月租,首充50元得100元,送88MB粮票,可兑换视频网站会员或卡券等;"},
            { cardGroup : "未完待续...<br/>+<br/>联通", cardName : "未完待续...(天国的小王卡)", sumCost :CalculationSumCost(showCardName(88)), tip : "未完待续..."}
         ];
         // Creation of first grid store
         let gridStore = Ext.create('Ext.data.Store', {
         model: 'StudentDataModel',
         data: myData
         });
         // Creation of first grid
         Ext.create('Ext.grid.Panel', {
            id                : 'gridId',
            store             : gridStore,
            stripeRows        : true,
            title             : '互联网企业与运营商合作卡资费对比', // Title for the grid
            renderTo          :'gridDiv', // Div id where the grid has to be rendered
            width             : totalWidth,
            collapsible       : true, // to collapse grid
            enableColumnMove  :true, // which alllows column to move to different position by dragging that column.
            enableColumnResize:true, // which allows to resize column run time.
            scrollable:{
                x:true,
                y:true
            },
            columns           :
                [{ 
                    header: "合作方",
                    dataIndex: 'cardGroup',	
                    id : 'cardGroup',    
                    flex: 1,  		 // defines the amount of space this column is going to take in the grid container with respect to all.	
                    sortable: false, // to sort grid column data. 
                    hideable: true,  
                    renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                         return '<div style="white-space:normal;">' + value + '</div>';     
                    } 
                },{
                    header: "卡名", 
                    dataIndex: 'cardName',
                    flex: 1.5, 
                    sortable: false,
                    hideable: false ,
                    renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                         return '<div style="white-space:normal;">' + value + '</div>';     
                    } 
                }/*,{
                    header: "月租",
                    dataIndex: 'baseCost',
                    flex: .5, 
                    sortable: false, 
                    // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                    renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                  	  return showCardName(rowIndex).base_cost;
                    }
                },{
                    header: "省内流量",
                    dataIndex: 'flowProvince',
                    flex: .5, 
                    sortable: false, 
                    // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                    renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                      return showCardName(rowIndex).flow_province;
                    }
                },{
                    header: "国内流量",
                    dataIndex: 'flowCountry',
                    flex: .5, 
                    sortable: false, 
                    // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                    renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                      return showCardName(rowIndex).flow_country;
                    }
                },{
                    header: "语音",
                    dataIndex: 'call',
                    flex: .5, 
                    sortable: false, 
                    // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                    renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                      return showCardName(rowIndex).call_count;
                    }
            	  }*/,{
                   	header: "流量费用",
                   	dataIndex: 'flowCost',
                   	flex: .5, 
                   	sortable: false, 
                  	// renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                   	renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                      return CalculationFlowCost(showCardName(rowIndex));
                 		}
            	  }/*,{
                		header: "通话费用",
                 		dataIndex: 'callCost',
                  	flex: .5, 
                  	sortable: false, 
                  	// renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                  	renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                      return CalculationCallCost(showCardName(rowIndex));
                  	}
          		  }*/,{
        	          header: "总费用",
        	          dataIndex: 'sumCost',
                    id : 'sum_cost',
        	          flex: 0.5, 
        	          sortable: true/*, 
        	          // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
        	          renderer :  function (value, metadata, record, rowIndex, colIndex, store) { 
                      return value;
        	          }*/
        	   	  },{
                    header: "备注", 
                    dataIndex: 'tip',
                    flex: 3.5, 
                    sortable: false,
                    renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                         return '<div style="white-space:normal;">' + value + '</div>';     
                    } 
                }]
          });
      });