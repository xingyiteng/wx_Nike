Page({
    data: {
        imgUrls:[
            'http://a1.qpic.cn/psb?/V12mACl60hSBap/*1oYfvRO0K4Vqt5LsuzgGJOZPIO7dHOFlBy28dkniEs!/m/dFQBAAAAAAAAnull&bo=IQEfAQAAAAADBxw!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/uwAWAwGM0S0mZZyLBslhcH9EHgdqd8NeQF44efHXQvg!/m/dL8AAAAAAAAAnull&bo=IQEhAQAAAAADByI!&rf=photolist&t=5',
            'http://a1.qpic.cn/psb?/V12mACl60hSBap/8.c7s6rep.PIW5ijNzb5inkYJlWq6Iv0hoqntMpGX*k!/m/dFQBAAAAAAAAnull&bo=IAEiAQAAAAADByA!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/wRDmM4zmToVYOJ9txikGiyJRiUyKoUZqfcL..cyDYCo!/m/dD4BAAAAAAAAnull&bo=IAEhAQAAAAADByM!&rf=photolist&t=5',
            'http://a3.qpic.cn/psb?/V12mACl60hSBap/5bC9ntOu8.2H7DmGNPE39PECIuytPCjFUCvXutjg1zs!/m/dLYAAAAAAAAAnull&bo=IgEjAQAAAAADByM!&rf=photolist&t=5',
            'http://a1.qpic.cn/psb?/V12mACl60hSBap/jVV8CkZqn1IS8KsFVozJC3kxrSMyAYHsjDmpK0s150M!/m/dDQBAAAAAAAAnull&bo=IgEnAQAAAAADByc!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/H9A4HQEfe.MarQ8pDzlAWNpP2Y5P5WlAjKnGc8C3s2w!/m/dL8AAAAAAAAAnull&bo=IwEpAQAAAAADByg!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/JpmYOnbSSHyr0MiBbsk1LHQa7B4dwfFB91yM4IYdPiQ!/m/dL8AAAAAAAAAnull&bo=IQEiAQAAAAADByE!&rf=photolist&t=5',
            'http://a4.qpic.cn/psb?/V12mACl60hSBap/PJ5vTp3ziVOWlo5do2Gd3WOEt.dUHvvffxDofuqNkfw!/m/dMMAAAAAAAAAnull&bo=OASqAQAAAAADB7U!&rf=photolist&t=5'
        ],
        js:[{
            "touxiang":"",
            "name":"",
            "jljj_1":"",
            "jljj":"",
            "jsln":"",
            "xl_name":"",
            "xl_name2":"",
            "xl_time":""
        }]
    },
    tz(e){
        wx.navigateTo({
            url:"../xl/xl?index="+e.currentTarget.dataset.index,
        });
        console.log(e);
    },
    onLoad: function(options) {
        const _this = this;
		wx.request({
			url: "https://ajax.quncrm.com/56fa4377ba1b82a4378b4798/api/ntc/ntc-workout/get-custom-train-drills",
			data: {},
			header: {
				'content-type': 'json'
			},
			success: function (res) {
                console.log(res.data);
				console.log(res.data[0].image);                
				_this.setData({
                    subjects: res.data[0].image,
                    subjects2:res.data[1].image
				});
			}
		}),
        this.setData({
            index:options.index,
        })
        if(this.data.index==0){
            this.setData({
                js:[{
                    "touxiang":"http://a1.qpic.cn/psb?/V12mACl60hSBap/*1oYfvRO0K4Vqt5LsuzgGJOZPIO7dHOFlBy28dkniEs!/m/dFQBAAAAAAAAnull&bo=IQEfAQAAAAADBxw!&rf=photolist&t=5",
                    "name":"何耀辉",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==1){
        this.setData({
            js:[{
                "touxiang":"http://a4.qpic.cn/psb?/V12mACl60hSBap/uwAWAwGM0S0mZZyLBslhcH9EHgdqd8NeQF44efHXQvg!/m/dL8AAAAAAAAAnull&bo=IQEhAQAAAAADByI!&rf=photolist&t=5",
                "name":"周飞",
                "jljj_1":"Nike签约教练，擅长跑步/体能训练/减脂训练，擅长NTC/瑜伽，坐标广州。",
                "jljj":"7年洗脚教练，超过5000人洗脚教练，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                "jsln":"有目标，有计划，才是真的训练！",
                "xl_img":"",
                "xl_name":"马拉松训练",
                "xl_name2":"马拉松跑后拉伸",
                "xl_time":"6:00"
            }]
        });
        }
        if(this.data.index==2){
            this.setData({
                js:[{
                    "touxiang":"http://a1.qpic.cn/psb?/V12mACl60hSBap/8.c7s6rep.PIW5ijNzb5inkYJlWq6Iv0hoqntMpGX*k!/m/dFQBAAAAAAAAnull&bo=IAEiAQAAAAADByA!&rf=photolist&t=5",
                    "name":"陈曦",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==3){
            this.setData({
                js:[{
                    "touxiang":"http://a3.qpic.cn/psb?/V12mACl60hSBap/wRDmM4zmToVYOJ9txikGiyJRiUyKoUZqfcL..cyDYCo!/m/dD4BAAAAAAAAnull&bo=IAEhAQAAAAADByM!&rf=photolist&t=5",
                    "name":"王立鑫",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==4){
            this.setData({
                js:[{
                    "touxiang":"http://a3.qpic.cn/psb?/V12mACl60hSBap/5bC9ntOu8.2H7DmGNPE39PECIuytPCjFUCvXutjg1zs!/m/dLYAAAAAAAAAnull&bo=IgEjAQAAAAADByM!&rf=photolist&t=5",
                    "name":"王立军",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==5){
            this.setData({
                js:[{
                    "touxiang":"http://a1.qpic.cn/psb?/V12mACl60hSBap/jVV8CkZqn1IS8KsFVozJC3kxrSMyAYHsjDmpK0s150M!/m/dDQBAAAAAAAAnull&bo=IgEnAQAAAAADByc!&rf=photolist&t=5",
                    "name":"宋美美",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==6){
            this.setData({
                js:[{
                    "touxiang":"http://a4.qpic.cn/psb?/V12mACl60hSBap/H9A4HQEfe.MarQ8pDzlAWNpP2Y5P5WlAjKnGc8C3s2w!/m/dL8AAAAAAAAAnull&bo=IwEpAQAAAAADByg!&rf=photolist&t=5",
                    "name":"钱晟",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
        if(this.data.index==7){
            this.setData({
                js:[{
                    "touxiang":"http://a4.qpic.cn/psb?/V12mACl60hSBap/JpmYOnbSSHyr0MiBbsk1LHQa7B4dwfFB91yM4IYdPiQ!/m/dL8AAAAAAAAAnull&bo=IQEiAQAAAAADByE!&rf=photolist&t=5",
                    "name":"于洋",
                    "jljj_1":"Nike签约教练，女子健康运动倡导者，擅长NTC/瑜伽，坐标北京。",
                    "jljj":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师,轻食·月提阿斯傅海峰黄牛时候覅速回复你爱上南方开始就爱发收款回复hi阿苏花覅收费适合你覅时候贾师傅怀念是否能我爱上覅哦啊好舒服is货币顾不上的恢复哈斯发哈似乎带速度会",
                    "jsln":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被经定义。follow your heart,by yourself.",
                    "xl_img":"",
                    "xl_name":"每日灵活伸展",
                    "xl_name2":"跑步后恢复性训练",
                    "xl_time":"6:00"
                }]
            });
        }
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        //Do some when page show.
        
    },
    onHide: function() {
        //Do some when page hide.
        
    },
    onUnload: function() {
        //Do some when page unload.
        
    },
    onPullDownRefresh: function() {
        //Do some when page pull down.
        
    }
})