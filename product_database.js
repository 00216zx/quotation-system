// 产品数据库 - 严格按照铸信+样本+2026.3主要技术参数
const productDB = {
    // 吹膜机系列
    filmBlowing: {
        // ABA CO-EX AUTO系列
        'ABA-900': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX AUTO 吹膜机', note: '' },
                { item: '型号', value: 'ABA-900', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '400-800mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:120kg/hr LDPE：150kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ50×2', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 180  HDPE: 80', note: '' },
                { item: '风机', value: '5.5kwx1', note: '' },
                { item: '牵引辊宽', value: '900mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '4.8×3.2×5.5m', note: '' }
            ]
        },
        'ABA-1100': {
            basePrice: 98000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX AUTO 吹膜机', note: '' },
                { item: '型号', value: 'ABA-1100', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '500-1000mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:123kg/hr LDPE：180kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55×2', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 220  HDPE: 100', note: '' },
                { item: '风机', value: '5.5kwx1', note: '' },
                { item: '牵引辊宽', value: '1100mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5×3.5×6m', note: '' }
            ]
        },
        'ABA-1300': {
            basePrice: 115000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX AUTO 吹膜机', note: '' },
                { item: '型号', value: 'ABA-1300', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:130kg/hr LDPE：200kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55×1 φ65×1', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 250  HDPE: 120', note: '' },
                { item: '风机', value: '7.5kwx1', note: '' },
                { item: '牵引辊宽', value: '1300mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5×3.7×7.5m', note: '' }
            ]
        },
        // ABA CO-EX系列
        'ABA-CO-900': {
            basePrice: 80000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX 吹膜机', note: '' },
                { item: '型号', value: 'ABA-900', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '400-800mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:80kg/hr LDPE:120kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ50×2', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 180  HDPE: 80', note: '' },
                { item: '风机', value: '3kwx1', note: '' },
                { item: '牵引辊宽', value: '900mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '4.8×3.2×5.5m', note: '' }
            ]
        },
        'ABA-CO-1100': {
            basePrice: 92000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX 吹膜机', note: '' },
                { item: '型号', value: 'ABA-1100', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '500-1000mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:100kg/hr LDPE:150kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55×2', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 220  HDPE: 100', note: '' },
                { item: '风机', value: '4kwx1', note: '' },
                { item: '牵引辊宽', value: '1100mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5×3.5×6m', note: '' }
            ]
        },
        'ABA-CO-1300': {
            basePrice: 108000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABA CO-EX 吹膜机', note: '' },
                { item: '型号', value: 'ABA-1300', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: '0.02-0.10mm', note: '' },
                { item: '最大产量', value: 'HDPE:120kg/hr LDPE:180kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55×1 φ65×1', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'LDPE: 250  HDPE: 120', note: '' },
                { item: '风机', value: '5.5kwx1', note: '' },
                { item: '牵引辊宽', value: '1300mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5×3.7×7.5m', note: '' }
            ]
        },
        // ABC CO-EX系列
        'ABC-1300': {
            basePrice: 280000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC CO-EX 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-1300', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '800-1200mm', note: '' },
                { item: '产品厚度', value: '0.028-0.20mm', note: '' },
                { item: '最大产量', value: '150kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ50 Bφ55 Cφ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A18.5kw+B22kw+C18.5kw', note: '' },
                { item: '模口', value: '300mm', note: '' },
                { item: '风机', value: '7.5kwx1', note: '' },
                { item: '牵引辊宽', value: '1300mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '1.5kw', note: '' },
                { item: '外形尺寸', value: '9.5×4.5×7.5m', note: '' }
            ]
        },
        'ABC-1600': {
            basePrice: 350000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC CO-EX 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-1600', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1000-1500mm', note: '' },
                { item: '产品厚度', value: '0.028-0.20mm', note: '' },
                { item: '最大产量', value: '200kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ55 Bφ65 Cφ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A22kw+B30kw+C22kw', note: '' },
                { item: '模口', value: '350mm', note: '' },
                { item: '风机', value: '11kw', note: '' },
                { item: '牵引辊宽', value: '1600mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '2.2kw', note: '' },
                { item: '外形尺寸', value: '10.5×5.0×9m', note: '' }
            ]
        },
        'ABC-2100': {
            basePrice: 480000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC CO-EX 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-2100', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1200-2000mm', note: '' },
                { item: '产品厚度', value: '0.03-0.20mm', note: '' },
                { item: '最大产量', value: '250kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ65 Bφ75 Cφ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A30kw+B37kw+C30kw', note: '' },
                { item: '模口', value: '500mm', note: '' },
                { item: '风机', value: '15kw', note: '' },
                { item: '牵引辊宽', value: '2100mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '2.2kw', note: '' },
                { item: '外形尺寸', value: '11.5×5.5×10m', note: '' }
            ]
        },
        // ABC-IBC系列
        'ABC-1400': {
            basePrice: 300000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC-IBC 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-1400', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '800-1200mm', note: '' },
                { item: '产品厚度', value: '0.028-0.20mm', note: '' },
                { item: '最大产量', value: '150kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ50 Bφ55 Cφ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A18.5kw+B22kw+C18.5kw', note: '' },
                { item: '模口', value: '300mm', note: '' },
                { item: '风机', value: '7.5kw', note: '' },
                { item: '牵引辊宽', value: '1400mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '1.5kw', note: '' },
                { item: '外形尺寸', value: '9.5x4.5x7.5m', note: '' }
            ]
        },
        'ABC-1700': {
            basePrice: 380000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC-IBC 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-1700', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1000-1500mm', note: '' },
                { item: '产品厚度', value: '0.028-0.20mm', note: '' },
                { item: '最大产量', value: '200kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ55 Bφ65 Cφ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A22kw+B30kw+C22kw', note: '' },
                { item: '模口', value: '350mm', note: '' },
                { item: '风机', value: '11kw', note: '' },
                { item: '牵引辊宽', value: '1700mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '2.2kw', note: '' },
                { item: '外形尺寸', value: '10.5x5x9m', note: '' }
            ]
        },
        'ABC-2200': {
            basePrice: 520000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'ABC-IBC 三层共挤吹膜机', note: '' },
                { item: '型号', value: 'ABC-2200', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1200-2000mm', note: '' },
                { item: '产品厚度', value: '0.03-0.20mm', note: '' },
                { item: '最大产量', value: '250kg/hr', note: '' },
                { item: '螺杆直径', value: 'Aφ65 Bφ75 Cφ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A30kw+B37kw+C30kw', note: '' },
                { item: '模口', value: '500mm', note: '' },
                { item: '风机', value: '15kw', note: '' },
                { item: '牵引辊宽', value: '2200mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '2.2kw', note: '' },
                { item: '外形尺寸', value: '11.5x5.5x10m', note: '' }
            ]
        },
        // 5 LAYERS-FFS-IBC系列
        '5FFS-IBC': {
            basePrice: 850000,
            image: './images/5FFS-IBC.jpg',
            config: [
                { item: '系列', value: '5 LAYERS-FFS-IBC 五层共挤重包装内冷吹膜生产线', note: '' },
                { item: '型号', value: '5FFS-IBC', note: '' },
                { item: '适应原料', value: 'HDPE LLDPE MLLDPE HDPE', note: '' },
                { item: '生产最大膜宽', value: '1000mm', note: '' },
                { item: '制品厚度', value: '0.10mm~0.25mm', note: '' },
                { item: '最大挤出量', value: '250-300kg/h', note: '' },
                { item: '螺杆直径', value: 'A:φ55 B:φ55 C:φ65 D:φ55 E:φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: 'A30kw B 30kw C:37kw D:30kw E:30kw', note: '' },
                { item: '模口直径', value: 'φ200mm', note: '' },
                { item: '多组分喂料系统', value: '5 sets', note: '' },
                { item: 'IBC膜泡内冷控制系统', value: '标配', note: '' },
                { item: '牵引方式', value: '水平360度向上牵引旋转', note: '' },
                { item: '最大收卷卷径', value: 'φ1400mm', note: '' },
                { item: '齿轮箱型号', value: 'A:173 B:173 C:200 D:173 E:173', note: '' },
                { item: '收卷方式', value: '背靠背全自动双收卷', note: '' },
                { item: '外形尺寸', value: '10x7.5x15m', note: '' }
            ]
        },
        // AB CO-EX系列
        'AB-1100': {
            basePrice: 75000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'AB CO-EX 两层共挤吹膜机', note: '' },
                { item: '型号', value: 'AB-1100', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: '0.03-0.20mm', note: '' },
                { item: '最大产量', value: '120kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ50+φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: '15kw / 18.5kw', note: '' },
                { item: '模口', value: 'φ220mm', note: '' },
                { item: '风机', value: '5.5kw', note: '' },
                { item: '牵引辊宽', value: '1100mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '6.5x5.5x5.5m', note: '' }
            ]
        },
        'AB-1600': {
            basePrice: 95000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'AB CO-EX 两层共挤吹膜机', note: '' },
                { item: '型号', value: 'AB-1600', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '800-1500mm', note: '' },
                { item: '产品厚度', value: '0.03-0.20mm', note: '' },
                { item: '最大产量', value: '150kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55+φ60', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: '18.5kw/22kw', note: '' },
                { item: '模口', value: 'φ250mm', note: '' },
                { item: '风机', value: '7.5kw', note: '' },
                { item: '牵引辊宽', value: '1600mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '7.5x5.8x7.5m', note: '' }
            ]
        },
        'AB-2000': {
            basePrice: 125000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'AB CO-EX 两层共挤吹膜机', note: '' },
                { item: '型号', value: 'AB-2000', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1000-1500mm', note: '' },
                { item: '产品厚度', value: '0.03-0.20mm', note: '' },
                { item: '最大产量', value: '180kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ60+φ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: '22kw/30kw', note: '' },
                { item: '模口', value: 'φ350mm', note: '' },
                { item: '风机', value: '11kw', note: '' },
                { item: '牵引辊宽', value: '2000mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '18N.m', note: '' },
                { item: '外形尺寸', value: '7.8x6.4x9m', note: '' }
            ]
        },
        // PP系列
        'PP-600': {
            basePrice: 65000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'PP 系列吹膜机', note: '' },
                { item: '型号', value: 'PP-600', note: '' },
                { item: '通用材料', value: 'PP', note: '' },
                { item: '产品宽度', value: '100-500mm', note: '' },
                { item: '产品厚度', value: '0.03-0.11mm', note: '' },
                { item: '最大产量', value: '40-50kg/h', note: '' },
                { item: '螺杆直径', value: 'φ45', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ60-100mm', note: '' },
                { item: '主机功率', value: '11kw', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '引取电机功率', value: '0.75kw', note: '' },
                { item: '卷取功率', value: '6N.m', note: '' },
                { item: '外形尺寸', value: '3.8×2.0×4.1m', note: '' }
            ]
        },
        'PP-800': {
            basePrice: 75000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'PP 系列吹膜机', note: '' },
                { item: '型号', value: 'PP-800', note: '' },
                { item: '通用材料', value: 'PP', note: '' },
                { item: '产品宽度', value: '200-700mm', note: '' },
                { item: '产品厚度', value: '0.03-0.11mm', note: '' },
                { item: '最大产量', value: '50-60kg/h', note: '' },
                { item: '螺杆直径', value: 'φ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ80-150mm', note: '' },
                { item: '主机功率', value: '15kw', note: '' },
                { item: '牵引辊宽', value: '800mm', note: '' },
                { item: '引取电机功率', value: '1.1kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '外形尺寸', value: '4.5×2.2×4.5m', note: '' }
            ]
        },
        'PP-1000': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'PP 系列吹膜机', note: '' },
                { item: '型号', value: 'PP-1000', note: '' },
                { item: '通用材料', value: 'PP', note: '' },
                { item: '产品宽度', value: '300-900mm', note: '' },
                { item: '产品厚度', value: '0.03-0.11mm', note: '' },
                { item: '最大产量', value: '60-70kg/h', note: '' },
                { item: '螺杆直径', value: 'φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ100-200mm', note: '' },
                { item: '主机功率', value: '18.5kw', note: '' },
                { item: '牵引辊宽', value: '1000mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5×2.5×5.2m', note: '' }
            ]
        },
        // MONO系列
        'MONO-45': {
            basePrice: 45000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-45', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '200-400mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 30kg/h LD 40kg/h', note: '' },
                { item: '螺杆直径', value: 'φ45', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模头尺寸', value: 'HDPEφ60 LDPEφ100', note: '' },
                { item: '风机', value: '1.5kw', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '引取电机功率', value: '0.75kw', note: '' },
                { item: '卷取功率', value: '6N.m', note: '' },
                { item: '外形尺寸', value: '3.8x2x4.1m', note: '' }
            ]
        },
        'MONO-50': {
            basePrice: 55000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-50', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '300-600mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 40kg/h LD 50kg/h', note: '' },
                { item: '螺杆直径', value: 'φ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模头尺寸', value: 'HDPEφ80 LDPEφ120', note: '' },
                { item: '风机', value: '2.2kw', note: '' },
                { item: '牵引辊宽', value: '700mm', note: '' },
                { item: '引取电机功率', value: '1.1kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '外形尺寸', value: '5x2.2x4.5m', note: '' }
            ]
        },
        'MONO-55': {
            basePrice: 65000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-55', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '400-800mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 50kg/h LD 60kg/h', note: '' },
                { item: '螺杆直径', value: 'φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模头尺寸', value: 'HDPEφ80 LDPEφ180', note: '' },
                { item: '风机', value: '3kw', note: '' },
                { item: '牵引辊宽', value: '900mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '外形尺寸', value: '5.5x2.5x5.2m', note: '' }
            ]
        },
        'MONO-60': {
            basePrice: 75000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-60', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '500-1000mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 60kg/h LD 75kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ60', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模头尺寸', value: 'HDPEφ100 LDPEφ200', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1100mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5.8x2.8x6.3m', note: '' }
            ]
        },
        'MONO-65': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-65', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 70kg/hr LD 100kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模头尺寸', value: 'HDPEφ100 LDPEφ220', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1300mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5.8x2.8x6.3m', note: '' }
            ]
        },
        // MONO PLUS系列
        'MONO-75': {
            basePrice: 95000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PLUS 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-75', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '700-1500mm', note: '' },
                { item: '产品厚度', value: '0.03-0.2mm', note: '' },
                { item: '最大产量', value: 'HD 100kg/hr LD 150kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ75', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ250mm', note: '' },
                { item: '风机', value: '7.5kw', note: '' },
                { item: '牵引辊宽', value: '1600mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '25N.m', note: '' },
                { item: '外形尺寸', value: '6x3x7.5m', note: '' }
            ]
        },
        'MONO-100': {
            basePrice: 120000,
            image: 'images/MONO-100.png',
            config: [
                { item: '系列', value: 'MONO PLUS 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-100', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '1200-2000mm', note: '' },
                { item: '产品厚度', value: '0.03-0.2mm', note: '' },
                { item: '最大产量', value: 'HD 150kg/hr LD 200kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ100', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ350mm', note: '' },
                { item: '风机', value: '11kw', note: '' },
                { item: '牵引辊宽', value: '2100mm', note: '' },
                { item: '引取电机功率', value: '2.2kw', note: '' },
                { item: '卷取功率', value: '25N.m', note: '' },
                { item: '外形尺寸', value: '7.1x3.5x9m', note: '' }
            ]
        },
        // MONO PRO系列
        'MONO-PRO-45': {
            basePrice: 50000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PRO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-PRO-45', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '200-400mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 40kg/hr LD 50kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ45', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '风机', value: '1.5kw', note: '' },
                { item: '牵引辊宽', value: '500mm', note: '' },
                { item: '引取电机功率', value: '0.75kw', note: '' },
                { item: '卷取功率', value: '6N.m', note: '' },
                { item: '外形尺寸', value: '3.8x2x4.1m', note: '' }
            ]
        },
        'MONO-PRO-50': {
            basePrice: 60000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PRO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-PRO-50', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '300-600mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 45kg/hr LD 55kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '风机', value: '2.2kw', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '引取电机功率', value: '1.1kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '外形尺寸', value: '5x2.2x4.5m', note: '' }
            ]
        },
        'MONO-PRO-55': {
            basePrice: 70000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PRO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-PRO-55', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '400-800mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 55kg/hr LD 65kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '风机', value: '3kw', note: '' },
                { item: '牵引辊宽', value: '800mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '外形尺寸', value: '5.5x2.3x5.2m', note: '' }
            ]
        },
        'MONO-PRO-60': {
            basePrice: 80000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PRO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-PRO-60', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '500-1000mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 60kg/hr LD 75kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ60', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1000mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5.8x2.8x6.3m', note: '' }
            ]
        },
        'MONO-PRO-65': {
            basePrice: 90000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO PRO 系列吹膜机', note: '' },
                { item: '型号', value: 'MONO-PRO-65', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 60kg/hr LD 100kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1200mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '外形尺寸', value: '5.8x2.8x6.3m', note: '' }
            ]
        },
        // MONO DOUBLE HEAD 单螺杆双模头吹膜机系列
        'SJ-60': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO DOUBLE HEAD 单螺杆双模头吹膜机', note: '' },
                { item: '型号', value: 'SJ-60', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '薄膜宽度', value: '100-500mm', note: '' },
                { item: '薄膜厚度', value: '0.010-0.08mm', note: '' },
                { item: '产量', value: '40-60kg/h', note: '' },
                { item: '螺杆直径', value: 'φ60', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: '22kw', note: '' },
                { item: '外形尺寸', value: '6200x3000x3200mm', note: '' }
            ]
        },
        'SJ-70': {
            basePrice: 98000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO DOUBLE HEAD 单螺杆双模头吹膜机', note: '' },
                { item: '型号', value: 'SJ-70', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '薄膜宽度', value: '100-600mm', note: '' },
                { item: '薄膜厚度', value: '0.010-0.08mm', note: '' },
                { item: '产量', value: '50-70kg/h', note: '' },
                { item: '螺杆直径', value: 'φ70', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '主机功率', value: '30kw', note: '' },
                { item: '外形尺寸', value: '6500x3200x3300mm', note: '' }
            ]
        },
        // SJ系列
        'SJ-P45': {
            basePrice: 48000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO-LINE PRINTING(GRAVURE) 塑料吹膜凹版印刷机组系列', note: '' },
                { item: '型号', value: 'SJ-P45', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '100-500mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 40kg/hr LD 50kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ45', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ60/80 LDφ100/120', note: '' },
                { item: '主机功率', value: '11kw', note: '' },
                { item: '风机', value: '1.5kw', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '引取电机功率', value: '0.75kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '印刷长度', value: '250-1000', note: '' },
                { item: '外形尺寸', value: '5x2x4.1m', note: '' }
            ]
        },
        'SJ-P50': {
            basePrice: 58000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO-LINE PRINTING(GRAVURE) 塑料吹膜凹版印刷机组系列', note: '' },
                { item: '型号', value: 'SJ-P50', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '300-600mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 45kg/hr LD 55kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ50', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ60/100 LDφ120/150', note: '' },
                { item: '主机功率', value: '15kw', note: '' },
                { item: '风机', value: '2.2kw', note: '' },
                { item: '牵引辊宽', value: '700mm', note: '' },
                { item: '引取电机功率', value: '1.1kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '印刷长度', value: '250-1000', note: '' },
                { item: '外形尺寸', value: '5x2.1x4.5m', note: '' }
            ]
        },
        'SJ-P55': {
            basePrice: 68000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO-LINE PRINTING(GRAVURE) 塑料吹膜凹版印刷机组系列', note: '' },
                { item: '型号', value: 'SJ-P55', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '400-800mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 55kg/hr LD 65kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ55', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ80/100 LDφ180/200', note: '' },
                { item: '主机功率', value: '18.5kw', note: '' },
                { item: '风机', value: '3kw', note: '' },
                { item: '牵引辊宽', value: '900mm', note: '' },
                { item: '引取电机功率', value: '1.1kw', note: '' },
                { item: '卷取功率', value: '10N.m', note: '' },
                { item: '印刷长度', value: '250-1000', note: '' },
                { item: '外形尺寸', value: '5.5x2.3x5.2m', note: '' }
            ]
        },
        'SJ-P60': {
            basePrice: 78000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO-LINE PRINTING(GRAVURE) 塑料吹膜凹版印刷机组系列', note: '' },
                { item: '型号', value: 'SJ-P60', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '500-1000mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 60kg/hr LD 75kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ60', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ100 LDφ200', note: '' },
                { item: '主机功率', value: '22kw', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1100mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '印刷长度', value: '250-1000', note: '' },
                { item: '外形尺寸', value: '5.8x2.6x6.3m', note: '' }
            ]
        },
        'SJ-P65': {
            basePrice: 88000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MONO-LINE PRINTING(GRAVURE) 塑料吹膜凹版印刷机组系列', note: '' },
                { item: '型号', value: 'SJ-P65', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '600-1200mm', note: '' },
                { item: '产品厚度', value: 'HD 0.009-0.15mm LD 0.03-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 60kg/hr LD 100kg/hr', note: '' },
                { item: '螺杆直径', value: 'φ65', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ120/150 LDφ220/250', note: '' },
                { item: '主机功率', value: '22kw', note: '' },
                { item: '风机', value: '4kw', note: '' },
                { item: '牵引辊宽', value: '1300mm', note: '' },
                { item: '引取电机功率', value: '1.5kw', note: '' },
                { item: '卷取功率', value: '16N.m', note: '' },
                { item: '印刷长度', value: '250-1000', note: '' },
                { item: '外形尺寸', value: '5.8x2.8x6.3m', note: '' }
            ]
        },
        'S-40Dx2x700': {
            basePrice: 95000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双色彩条吹膜机', note: '' },
                { item: '型号', value: 'S-40Dx2x700', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '螺杆直径', value: '40x2', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '最大挤出量', value: '30-60kg/h', note: '' },
                { item: '薄膜宽度', value: '600mm', note: '' },
                { item: '薄膜厚度', value: '0.01-0.06mm', note: '' },
                { item: '主机功率', value: '11kw', note: '' },
                { item: '外形尺寸', value: '3800x2000x5200mm', note: '' }
            ]
        },
        'MINI-45': {
            basePrice: 45000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'MINI 系列吹膜机', note: '' },
                { item: '型号', value: 'MINI-45', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '100-500mm', note: '' },
                { item: '产品厚度', value: 'HD 0.01-0.1mm LD 0.02-0.15mm', note: '' },
                { item: '最大产量', value: 'HD 40kg/hour LD 50kg/hour', note: '' },
                { item: '螺杆直径', value: 'φ45', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'HDφ60 LDφ100', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '有效引取膜宽度', value: '500mm', note: '' },
                { item: '主机功率', value: '11kw', note: '' },
                { item: '外形尺寸', value: '3x1.5x3.6m', note: '' }
            ]
        },
        'MINI-45-PRO': {
            basePrice: 55000,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '迷你型高速吹膜机', note: '' },
                { item: '型号', value: 'MINI-45-PRO', note: '' },
                { item: '通用材料', value: 'HDPE LDPE LLDPE', note: '' },
                { item: '产品宽度', value: '100-500mm', note: '' },
                { item: '产品厚度', value: '0.01-0.1mm', note: '' },
                { item: '最大产量', value: 'HD 50kg LD 60kg', note: '' },
                { item: '螺杆直径', value: 'φ45mm', note: '' },
                { item: '螺杆长径比', value: '32:1', note: '' },
                { item: '模口', value: 'φ60mm 台湾式高速模头', note: '' },
                { item: '牵引辊宽', value: '600mm', note: '' },
                { item: '有效引取膜宽度', value: '500mm', note: '' },
                { item: '主机功率', value: '18.5kw', note: '' },
                { item: '外形尺寸', value: '3x1.5x3.6m', note: '' }
            ]
        }
    },
    // 制袋机系列
    bagMaker: {
        // DFR系列
        'DFR-450×2': {
            basePrice: 68000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '中速双通热封热切制袋机', note: '' },
                { item: '型号', value: 'DFR-450×2', note: '' },
                { item: '制袋宽度', value: '200-400mm', note: '' },
                { item: '制袋长度', value: '10-999mm', note: '' },
                { item: '制袋厚度', value: '0.01-0.05mm', note: '' },
                { item: '制袋速度', value: '120-200pcs/min', note: '' },
                { item: '主机功率', value: '1.5kw', note: '' },
                { item: '总功率', value: '4.6kw', note: '' },
                { item: '机重', value: '900kg', note: '' },
                { item: '外形尺寸', value: '2500×1300×1500mm', note: '' }
            ]
        },
        // RQL系列
        'RQL-600': {
            basePrice: 58000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'RQL 系列热封热切制袋机', note: '' },
                { item: '型号', value: 'RQL-600', note: '' },
                { item: '封切长度', value: '600mm', note: '' },
                { item: '封切宽度', value: '580mm', note: '' },
                { item: '制袋速度', value: '40-198pcs/min', note: '' },
                { item: '主机功率', value: '1.1kw', note: '' },
                { item: '机重', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3600×1150×1700mm', note: '' }
            ]
        },
        'RQL-800': {
            basePrice: 68000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'RQL 系列热封热切制袋机', note: '' },
                { item: '型号', value: 'RQL-800', note: '' },
                { item: '封切长度', value: '600mm', note: '' },
                { item: '封切宽度', value: '780mm', note: '' },
                { item: '制袋速度', value: '40-150pcs/min', note: '' },
                { item: '主机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '1000kg', note: '' },
                { item: '外形尺寸', value: '3600×1350×1700mm', note: '' }
            ]
        },
        'RQL-1000': {
            basePrice: 78000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'RQL 系列热封热切制袋机', note: '' },
                { item: '型号', value: 'RQL-1000', note: '' },
                { item: '封切长度', value: '600mm', note: '' },
                { item: '封切宽度', value: '980mm', note: '' },
                { item: '制袋速度', value: '40-120pcs/min', note: '' },
                { item: '主机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '1200kg', note: '' },
                { item: '外形尺寸', value: '3600×1550×1700mm', note: '' }
            ]
        },
        // SHXJ系列
        'SHXJ-600': {
            basePrice: 68000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '四线底封冷切制袋机', note: '' },
                { item: '型号', value: 'SHXJ-600', note: '' },
                { item: '封切宽度', value: '550mm', note: '' },
                { item: '封切长度', value: '950mm', note: '' },
                { item: '制袋速度', value: '30-120pcs/min', note: '' },
                { item: '电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3200×1150×1700mm', note: '' }
            ]
        },
        'SHXJ-800': {
            basePrice: 78000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '四线底封冷切制袋机', note: '' },
                { item: '型号', value: 'SHXJ-800', note: '' },
                { item: '封切宽度', value: '750mm', note: '' },
                { item: '封切长度', value: '950mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/min', note: '' },
                { item: '电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '1000kg', note: '' },
                { item: '外形尺寸', value: '3200×1350×1800mm', note: '' }
            ]
        },
        'SHXJ-1000': {
            basePrice: 88000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '四线底封冷切制袋机', note: '' },
                { item: '型号', value: 'SHXJ-1000', note: '' },
                { item: '封切宽度', value: '950mm', note: '' },
                { item: '封切长度', value: '950mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/min', note: '' },
                { item: '电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '1200kg', note: '' },
                { item: '外形尺寸', value: '3600×1550×1900mm', note: '' }
            ]
        },
        'SHXJ-1200': {
            basePrice: 98000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '四线底封冷切制袋机', note: '' },
                { item: '型号', value: 'SHXJ-1200', note: '' },
                { item: '封切宽度', value: '1150mm', note: '' },
                { item: '封切长度', value: '950mm', note: '' },
                { item: '制袋速度', value: '30-80pcs/min', note: '' },
                { item: '电机功率', value: '2.2kw', note: '' },
                { item: '机重', value: '1400kg', note: '' },
                { item: '外形尺寸', value: '3600×1750×2000mm', note: '' }
            ]
        },
        'SHXJ-6LINES': {
            basePrice: 128000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '六线底封冷切制袋机', note: '' },
                { item: '型号', value: 'SHXJ-6LINES', note: '' },
                { item: '制袋宽度', value: '350mm', note: '' },
                { item: '制袋长度', value: '100-600mm', note: '' },
                { item: '材料', value: 'LDPE HDPE', note: '' },
                { item: '厚度', value: '0.01-0.025mm', note: '' },
                { item: '制袋速度', value: '50-120pcs/minx4', note: '' },
                { item: '加热功率', value: '6kw', note: '' },
                { item: '总功率', value: '8kw', note: '' },
                { item: '伺服电机', value: '1.5kw', note: '' },
                { item: '主电机', value: '1.5kw', note: '' },
                { item: '放料主机', value: '750wx4', note: '' },
                { item: '机重', value: '2000kg', note: '' },
                { item: '外形尺寸', value: '4500×1350×1800mm', note: '' }
            ]
        },
        // DFL系列
        'DFL-500': {
            basePrice: 58000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑点断连卷制袋机', note: '' },
                { item: '型号', value: 'DFL-500', note: '' },
                { item: '制袋最大宽度', value: '480mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.025mm', note: '' },
                { item: '最大裁切长度', value: '999mm', note: '' },
                { item: '生产能力', value: '30-120pcs/min', note: '' },
                { item: '总功率', value: '3.2kw', note: '' },
                { item: '机重', value: '650kg', note: '' },
                { item: '外形尺寸', value: '3350×900×1500mm', note: '' }
            ]
        },
        'DFL-600': {
            basePrice: 62000,
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑点断连卷制袋机', note: '' },
                { item: '型号', value: 'DFL-600', note: '' },
                { item: '制袋最大宽度', value: '580mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.025mm', note: '' },
                { item: '最大裁切长度', value: '999mm', note: '' },
                { item: '生产能力', value: '30-120pcs/min', note: '' },
                { item: '总功率', value: '3.4kw', note: '' },
                { item: '机重', value: '750kg', note: '' },
                { item: '外形尺寸', value: '3350×1000×1500mm', note: '' }
            ]
        },
        'DFL-700': {
            basePrice: 66000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑点断连卷制袋机', note: '' },
                { item: '型号', value: 'DFL-700', note: '' },
                { item: '制袋最大宽度', value: '680mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.025mm', note: '' },
                { item: '最大裁切长度', value: '999mm', note: '' },
                { item: '生产能力', value: '30-120pcs/min', note: '' },
                { item: '总功率', value: '3.6kw', note: '' },
                { item: '机重', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3350×1100×1500mm', note: '' }
            ]
        },
        'DFL-800': {
            basePrice: 72000,
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑点断连卷制袋机', note: '' },
                { item: '型号', value: 'DFL-800', note: '' },
                { item: '制袋最大宽度', value: '780mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.025mm', note: '' },
                { item: '最大裁切长度', value: '999mm', note: '' },
                { item: '生产能力', value: '30-120pcs/min', note: '' },
                { item: '总功率', value: '4.2kw', note: '' },
                { item: '机重', value: '900kg', note: '' },
                { item: '外形尺寸', value: '3350×1250×1500mm', note: '' }
            ]
        },
        // SHXJ-A系列
        'SHXJ-A-500': {
            basePrice: 78000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑控制双层连卷背心/平口袋制袋机', note: '' },
                { item: '型号', value: 'SHXJ-A-500', note: '' },
                { item: '最大制袋宽度', value: '400mm×2', note: '' },
                { item: '最大制袋长度', value: '1000mm', note: '' },
                { item: '制袋厚度', value: '0.01-0.10mm', note: '' },
                { item: '制袋速度', value: '20-200×2pcs/min', note: '' },
                { item: '总功率', value: '5kw', note: '' },
                { item: '整机重量', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3500×1050×1800mm', note: '' }
            ]
        },
        'SHXJ-A-600': {
            basePrice: 82000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑控制双层连卷背心/平口袋制袋机', note: '' },
                { item: '型号', value: 'SHXJ-A-600', note: '' },
                { item: '最大制袋宽度', value: '500mm×2', note: '' },
                { item: '最大制袋长度', value: '1000mm', note: '' },
                { item: '制袋厚度', value: '0.01-0.10mm', note: '' },
                { item: '制袋速度', value: '20-200×2pcs/min', note: '' },
                { item: '总功率', value: '5kw', note: '' },
                { item: '整机重量', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3500×1150×1800mm', note: '' }
            ]
        },
        'SHXJ-A-700': {
            basePrice: 86000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑控制双层连卷背心/平口袋制袋机', note: '' },
                { item: '型号', value: 'SHXJ-A-700', note: '' },
                { item: '最大制袋宽度', value: '600mm', note: '' },
                { item: '最大制袋长度', value: '1000mm', note: '' },
                { item: '制袋厚度', value: '0.01-0.10mm', note: '' },
                { item: '制袋速度', value: '20-200×2pcs/min', note: '' },
                { item: '总功率', value: '5kw', note: '' },
                { item: '整机重量', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3500×1250×1800mm', note: '' }
            ]
        },
        'SHXJ-A-800': {
            basePrice: 92000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '电脑控制双层连卷背心/平口袋制袋机', note: '' },
                { item: '型号', value: 'SHXJ-A-800', note: '' },
                { item: '最大制袋宽度', value: '700mm', note: '' },
                { item: '最大制袋长度', value: '1000mm', note: '' },
                { item: '制袋厚度', value: '0.01-0.10mm', note: '' },
                { item: '制袋速度', value: '20-200×2pcs/min', note: '' },
                { item: '总功率', value: '5kw', note: '' },
                { item: '整机重量', value: '800kg', note: '' },
                { item: '外形尺寸', value: '3500×1350×1800mm', note: '' }
            ]
        },
        // ZX系列
        'ZXCS-800': {
            basePrice: 158000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '穿带连卷制袋机', note: '' },
                { item: '型号', value: 'ZXCS-800', note: '' },
                { item: '制袋宽度/深度', value: '400-700mm', note: '' },
                { item: '制袋长度', value: '300-1000mm', note: '' },
                { item: '制袋速度', value: '50-160pcs/min', note: '' },
                { item: '制袋厚度', value: 'HDPE: 0.007-0.02mm LDPE: 0.02-0.05mm', note: '' },
                { item: '总功率', value: '18kw', note: '' },
                { item: '总重量', value: '2500kg', note: '' },
                { item: '整机尺寸', value: '10000×2200×1900mm', note: '' }
            ]
        },
        'ZXCS-1000': {
            basePrice: 178000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '穿带连卷制袋机', note: '' },
                { item: '型号', value: 'ZXCS-1000', note: '' },
                { item: '制袋宽度/深度', value: '500-900mm', note: '' },
                { item: '制袋长度', value: '500-1000mm', note: '' },
                { item: '制袋速度', value: '50-160pcs/min', note: '' },
                { item: '制袋厚度', value: 'HDPE: 0.007-0.02mm LDPE: 0.02-0.05mm', note: '' },
                { item: '总功率', value: '18kw', note: '' },
                { item: '总重量', value: '2500kg', note: '' },
                { item: '整机尺寸', value: '10000×2200×1900mm', note: '' }
            ]
        },
        'ZXF-500': {
            basePrice: 98000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '全自动有芯连卷超市平口保鲜袋制袋机', note: '' },
                { item: '型号', value: 'ZXF-500', note: '' },
                { item: '制袋速度', value: '50-300bags/min', note: '' },
                { item: '最高线速度', value: '120m/min', note: '' },
                { item: '制袋长度', value: '90-1000mm', note: '' },
                { item: '制袋宽度', value: '60-400mm', note: '' },
                { item: '制袋厚度', value: '0.005-0.015mm', note: '' },
                { item: '制袋形式', value: 'Shopping bag with core 有芯购物袋', note: '' },
                { item: '温控区间', value: '2 Zones', note: '' },
                { item: '加热总功率', value: '6kw', note: '' },
                { item: '总功率', value: '15kw', note: '' },
                { item: '机器尺寸', value: '6000×1300×1800mm', note: '' }
            ]
        },
        'ZX-400×2': {
            basePrice: 128000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '全自动双道无芯连卷制袋机', note: '' },
                { item: '型号', value: 'ZX-400×2', note: '' },
                { item: '制袋宽度', value: '100-180mm', note: '' },
                { item: '制袋长度', value: '400-1200mm', note: '' },
                { item: '制袋速度', value: '50-200pcs/min', note: '' },
                { item: '制袋厚度', value: '0.006-0.025mm', note: '' },
                { item: '制袋形式', value: 'Coreless Garbage Bag (Star Bottom) 无芯平口垃圾袋(星底)', note: '' },
                { item: '加热总功率', value: '8kw', note: '' },
                { item: '温控区间', value: '4 Zones', note: '' },
                { item: '总功率', value: '20kw', note: '' },
                { item: '总重量', value: '2000kg', note: '' },
                { item: '整机尺寸', value: '6200×2000×1750mm', note: '' }
            ]
        },
        'ZX-1300TF': {
            basePrice: 128000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '无张力飞刀电阻丝底封重型袋制袋机', note: '' },
                { item: '型号', value: 'ZX-1300TF', note: '' },
                { item: '制袋宽度', value: '1200mm', note: '' },
                { item: '制袋长度', value: '300-5000mm', note: '' },
                { item: '薄膜厚度', value: '0.02-0.20mm', note: '' },
                { item: '主机功率', value: '1.5kw', note: '' },
                { item: '机器重量', value: '2000KG', note: '' },
                { item: '外形尺寸', value: '6800*2100*1300MM', note: '' }
            ]
        },
        // ZB系列
        'ZB-FFS800': {
            basePrice: 188000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '重包装飞刀制袋机', note: '' },
                { item: '型号', value: 'ZB-FFS800', note: '' },
                { item: '最大制袋宽度', value: '700mm', note: '' },
                { item: '最大制袋长度', value: '1350mm', note: '' },
                { item: '制袋速度', value: '10-30pcs/min', note: '' },
                { item: '薄膜厚度', value: '0.10-0.20mm', note: '' },
                { item: '平均耗电量', value: '10kw', note: '' },
                { item: '机器重量', value: '1500kg', note: '' },
                { item: '机器尺寸', value: '6300×1700×1600mm', note: '' }
            ]
        },
        // GFQ系列
        'GFQ-600': {
            basePrice: 58000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '单道热封冷切制袋机', note: '' },
                { item: '型号', value: 'GFQ-600', note: '' },
                { item: '制袋最大宽度', value: '550mm', note: '' },
                { item: '制袋最大长度', value: '1500mm', note: '' },
                { item: '制袋速度', value: '30-120pcs/min', note: '' },
                { item: '主电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '750kg', note: '' },
                { item: '外形尺寸', value: '3200×1150×1550mm', note: '' }
            ]
        },
        'GFQ-800': {
            basePrice: 68000,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '单道热封冷切制袋机', note: '' },
                { item: '型号', value: 'GFQ-800', note: '' },
                { item: '制袋最大宽度', value: '750mm', note: '' },
                { item: '制袋最大长度', value: '1500mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/min', note: '' },
                { item: '主电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '900kg', note: '' },
                { item: '外形尺寸', value: '3200×1350×1650mm', note: '' }
            ]
        },
        'GFQ-1000': {
            basePrice: 75000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '单道热封冷切制袋机', note: '' },
                { item: '型号', value: 'GFQ-1000', note: '' },
                { item: '制袋最大宽度', value: '950mm', note: '' },
                { item: '制袋最大长度', value: '1500mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/min', note: '' },
                { item: '主电机功率', value: '1.5kw', note: '' },
                { item: '机重', value: '1100kg', note: '' },
                { item: '外形尺寸', value: '3200×1550×1750mm', note: '' }
            ]
        },
        'GFQ-1200': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '单道热封冷切制袋机', note: '' },
                { item: '型号', value: 'GFQ-1200', note: '' },
                { item: '制袋最大宽度', value: '1150mm', note: '' },
                { item: '制袋最大长度', value: '1500mm', note: '' },
                { item: '制袋速度', value: '30-80pcs/min', note: '' },
                { item: '主电机功率', value: '2.2kw', note: '' },
                { item: '机重', value: '1300kg', note: '' },
                { item: '外形尺寸', value: '3400×1750×1850mm', note: '' }
            ]
        },
        'GFQ-1000TF': {
            basePrice: 78000,
            image: 'https://images.unsplash.com/photo-1537471132684-368a15977e8e?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '单道冷切双烫刀无张力制袋机', note: '' },
                { item: '型号', value: 'GFQ-1000TF', note: '' },
                { item: '制袋长度', value: '1500mm', note: '' },
                { item: '制袋宽度', value: '900mm', note: '' },
                { item: '薄膜厚度', value: '0.02-0.20mm', note: '' },
                { item: '速度', value: '30-100 pcs/min', note: '' },
                { item: '主机功率', value: '2.2KW', note: '' },
                { item: '电源', value: '380V 50HZ', note: '' },
                { item: '机器重量', value: '900kg', note: '' },
                { item: '外型尺寸', value: '4200×1550×1500mm', note: '' }
            ]
        },
        // CY系列
        'CY-HB': {
            basePrice: 98000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '软式手提环制袋机', note: '' },
                { item: '型号', value: 'CY-HB', note: '' },
                { item: '制袋最大宽度', value: '250-600mm', note: '' },
                { item: '制袋最大长度', value: '700mm', note: '' },
                { item: '封切厚度', value: '0.05-0.2mm', note: '' },
                { item: '制袋速度', value: '20pcs/min', note: '' },
                { item: '电源', value: 'AC220V', note: '' },
                { item: '电机功率', value: '1.1kw', note: '' },
                { item: '整机重量', value: '1100kg', note: '' },
                { item: '外形尺寸', value: '1200×1200×1200mm', note: '' }
            ]
        },
        'CY-500C': {
            basePrice: 128000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双层全自动一次性手套机', note: '' },
                { item: '型号', value: 'CY-500C', note: '' },
                { item: '制手套长度', value: '200-350mm', note: '' },
                { item: '制手套宽度', value: '240-320mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.02mm', note: '' },
                { item: '制手套速度', value: '80-400pcs/min', note: '' },
                { item: '主机功率', value: '2.2KW', note: '' },
                { item: '电源', value: '380V 50HZ', note: '' },
                { item: '机器重量', value: '900kg', note: '' },
                { item: '外型尺寸', value: '2700×1100×1500mm', note: '' }
            ]
        },
        'CY-500x2': {
            basePrice: 88000,
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '半自动一次性手套机', note: '' },
                { item: '型号', value: 'CY-500x2', note: '' },
                { item: '制手套长度', value: '200-350mm', note: '' },
                { item: '制手套宽度', value: '240-320mm', note: '' },
                { item: '薄膜厚度', value: '0.008-0.02mm', note: '' },
                { item: '制手套速度', value: '80-400pcs/min', note: '' },
                { item: '主机功率', value: '2.2KW', note: '' },
                { item: '电源', value: '380V 50HZ', note: '' },
                { item: '机器重量', value: '900kg', note: '' },
                { item: '外型尺寸', value: '2700×1100×1500mm', note: '' }
            ]
        },
        'CY-800ZD': {
            basePrice: 288000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '全自动四功能购物袋制袋机', note: '' },
                { item: '型号', value: 'CY-800ZD', note: '' },
                { item: '制袋宽度', value: '250-650mm', note: '' },
                { item: '制袋长度', value: '250-650mm', note: '' },
                { item: '薄膜厚度', value: '0.02-0.05mm', note: '' },
                { item: '总功率', value: '8kw', note: '' },
                { item: '机重', value: '3000kg', note: '' },
                { item: '外形尺寸', value: '7600×3000×1850mm', note: '' }
            ]
        },
        'CY-SH-6LINES': {
            basePrice: 218000,
            image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双层六线全自动冷切背心袋制袋机', note: '' },
                { item: '型号', value: 'CY-SH-6LINES', note: '' },
                { item: '封切宽度', value: '120-320mm', note: '' },
                { item: '封切长度', value: '650mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/minx6', note: '' },
                { item: '电机功率', value: '2.2kw', note: '' },
                { item: '外形尺寸', value: '7500×1750×2000mm', note: '' },
                { item: '机重', value: '2000kg', note: '' }
            ]
        },
        'CY-SH-8LINES': {
            basePrice: 268000,
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双层八线全自动冷切背心袋制袋机', note: '' },
                { item: '型号', value: 'CY-SH-8LINES', note: '' },
                { item: '制袋宽度', value: '120-195mm', note: '' },
                { item: '制袋长度', value: '650mm', note: '' },
                { item: '制袋速度', value: '30-100pcs/minx8', note: '' },
                { item: '薄膜厚度', value: '0.01-0.03mm', note: '' },
                { item: '机器重量', value: '3000kgs', note: '' },
                { item: '机器尺寸', value: '7500×1750×2000mm', note: '' }
            ]
        },
        'CY-SH-4LINES': {
            basePrice: 188000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双层四线全自动冷切背心袋制袋机', note: '' },
                { item: '型号', value: 'CY-SH-4LINES', note: '' },
                { item: '袋宽（单色）', value: '100-450mm×4', note: '' },
                { item: '袋宽（彩色）', value: '100-950mm', note: '' },
                { item: '袋长', value: '650mm', note: '' },
                { item: '生产速度', value: '40-120pcs/min ×4', note: '' },
                { item: '薄膜厚度', value: '0.01-0.05mm', note: '' },
                { item: '主电机', value: '1.5kw', note: '' },
                { item: '放料电机', value: '400w×4', note: '' },
                { item: '整机重量', value: '2500kg', note: '' },
                { item: '外形尺寸', value: '6500×1550×2000mm', note: '' }
            ]
        },
        'CY-430×2': {
            basePrice: 168000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双道高速全自动背心袋成型制袋机', note: '' },
                { item: '型号', value: 'CY-430×2', note: '' },
                { item: '最大制袋宽度', value: '400mm×2', note: '' },
                { item: '最大制袋长度', value: '650mm', note: '' },
                { item: '制袋速度', value: '350pcs/min×2', note: '' },
                { item: '薄膜单面厚度', value: '0.010-0.025mm', note: '' },
                { item: '主机电机功率', value: '3.7kw', note: '' },
                { item: '外形尺寸', value: '5400×1850×1500mm', note: '' }
            ]
        },
        'CY-500×2': {
            basePrice: 158000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '双道全自动背心袋成型制袋机', note: '' },
                { item: '型号', value: 'CY-500×2', note: '' },
                { item: '制袋宽度', value: '450mm×2', note: '' },
                { item: '制袋长度', value: '650mm', note: '' },
                { item: '制袋速度', value: '210pcs/min×2', note: '' },
                { item: '薄膜单面厚度', value: '0.010-0.025mm', note: '' },
                { item: '机重', value: '2700kg', note: '' },
                { item: '外形尺寸', value: '5500×1800×1600mm', note: '' }
            ]
        },
        'CY-600/700/800': {
            basePrice: 128000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '全自动背心袋成型制袋机', note: '' },
                { item: '型号', value: 'CY-600/700/800', note: '' },
                { item: '制袋宽度', value: '200-650mm', note: '' },
                { item: '制袋长度', value: '200-650mm', note: '' },
                { item: '薄膜厚度', value: '0.015-0.035mm', note: '' },
                { item: '制袋速度', value: '80-150pcs/min', note: '' },
                { item: '外形尺寸', value: '5500×1200×1800mm', note: '' }
            ]
        }
    },
    // 印刷机系列
    printer: {
        // YT-S柔版同步带型高速印刷机系列
        'YT-600': {
            basePrice: 185000,
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'YT-S 2/4/6色柔版同步带型高速印刷机', note: '' },
                { item: '型号', value: 'YT-600', note: '' },
                { item: '最大材料宽度', value: '600mm', note: '' },
                { item: '最大印刷宽度', value: '560mm', note: '' },
                { item: '合适的印刷材料', value: 'PE PP Film /Paper / Woven bag /Non-woven', note: '' },
                { item: '最大印刷速度', value: '120m/min', note: '' },
                { item: '板材厚度', value: '1.14-3.94', note: '' },
                { item: '整机重量', value: '5000kg', note: '' },
                { item: '外形尺寸', value: '6.8×1.8×2.9m', note: '' }
            ]
        },
        'YT-800': {
            basePrice: 215000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'YT-S 2/4/6色柔版同步带型高速印刷机', note: '' },
                { item: '型号', value: 'YT-800', note: '' },
                { item: '最大材料宽度', value: '800mm', note: '' },
                { item: '最大印刷宽度', value: '760mm', note: '' },
                { item: '合适的印刷材料', value: 'PE PP Film /Paper / Woven bag /Non-woven', note: '' },
                { item: '最大印刷速度', value: '120m/min', note: '' },
                { item: '板材厚度', value: '1.14-3.94', note: '' },
                { item: '整机重量', value: '5500kg', note: '' },
                { item: '外形尺寸', value: '6.8×2×2.9m', note: '' }
            ]
        },
        'YT-1000': {
            basePrice: 245000,
            image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: 'YT-S 2/4/6色柔版同步带型高速印刷机', note: '' },
                { item: '型号', value: 'YT-1000', note: '' },
                { item: '最大材料宽度', value: '1000mm', note: '' },
                { item: '最大印刷宽度', value: '960mm', note: '' },
                { item: '合适的印刷材料', value: 'PE PP Film /Paper / Woven bag /Non-woven', note: '' },
                { item: '最大印刷速度', value: '120m/min', note: '' },
                { item: '板材厚度', value: '1.14-3.94', note: '' },
                { item: '整机重量', value: '6000kg', note: '' },
                { item: '外形尺寸', value: '6.8×2×2.9m', note: '' }
            ]
        },
        // YT 2色柔版齿轮传动型印刷机系列
        'YT-2600': {
            basePrice: 85000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '2色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-2600', note: '' },
                { item: '最大印料宽度', value: '600mm', note: '' },
                { item: '最大印刷宽度', value: '560mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '1900×1800×2300mm', note: '' }
            ]
        },
        'YT-2800': {
            basePrice: 95000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '2色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-2800', note: '' },
                { item: '最大印料宽度', value: '800mm', note: '' },
                { item: '最大印刷宽度', value: '760mm', note: '' },
                { item: '印刷品长度范围', value: '180-1000mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '1900×2000×2300mm', note: '' }
            ]
        },
        'YT-21000': {
            basePrice: 105000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '2色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-21000', note: '' },
                { item: '最大印料宽度', value: '1000mm', note: '' },
                { item: '最大印刷宽度', value: '960mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '1900×2200×2400mm', note: '' }
            ]
        },
        // YT 4色柔版齿轮传动型印刷机系列
        'YT-4600': {
            basePrice: 125000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '4色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-4600', note: '' },
                { item: '最大印料宽度', value: '600mm', note: '' },
                { item: '最大印刷宽度', value: '560mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×1600×2400mm', note: '' }
            ]
        },
        'YT-4800': {
            basePrice: 135000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '4色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-4800', note: '' },
                { item: '最大印料宽度', value: '800mm', note: '' },
                { item: '最大印刷宽度', value: '760mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×1800×2400mm', note: '' }
            ]
        },
        'YT-41000': {
            basePrice: 145000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '4色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-41000', note: '' },
                { item: '最大印料宽度', value: '1000mm', note: '' },
                { item: '最大印刷宽度', value: '960mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×2000×2400mm', note: '' }
            ]
        },
        // YT 6色柔版齿轮传动型印刷机系列
        'YT-6600': {
            basePrice: 165000,
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '6色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-6600', note: '' },
                { item: '最大印料宽度', value: '600mm', note: '' },
                { item: '最大印刷宽度', value: '560mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×1660×2950mm', note: '' }
            ]
        },
        'YT-6800': {
            basePrice: 175000,
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '6色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-6800', note: '' },
                { item: '最大印料宽度', value: '800mm', note: '' },
                { item: '最大印刷宽度', value: '760mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×1860×2950mm', note: '' }
            ]
        },
        'YT-61000': {
            basePrice: 185000,
            image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=300',
            config: [
                { item: '系列', value: '6色柔版齿轮传动型印刷机', note: '' },
                { item: '型号', value: 'YT-61000', note: '' },
                { item: '最大印料宽度', value: '1000mm', note: '' },
                { item: '最大印刷宽度', value: '960mm', note: '' },
                { item: '印刷品长度范围', value: '200-1100mm', note: '' },
                { item: '卷材最大直径', value: 'φ450mm', note: '' },
                { item: '印刷速度', value: '5-50m/min', note: '' },
                { item: '版材厚度(包括双面胶带)', value: '2.38mm', note: '' },
                { item: '外形尺寸(长×宽×高)', value: '4200×2060×2950mm', note: '' }
            ]
        }
    }
};