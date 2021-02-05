let distance = 0
let direction = 0
//  前进
function motor_move_forward() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, 255)
}

//  后退
function motor_move_backward() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, -255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, -255)
}

//  左平移
function motor_move_left() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
}

//  右平移
function motor_move_right() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
}

//  左前方
function motor_move_left_forard() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, 0)
}

//  左后方
function motor_move_left_backward() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 0)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, -255)
}

//  右前方
function motor_move_right_forard() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 0)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 255)
}

//  右后方
function motor_move_right_backward() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, -255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 0)
}

//  左转
function motor_roll_left() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
}

//  右转
function motor_roll_right() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
}

//  前轮左旋转
function motor_roll_front_left() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 0)
}

//  前轮右旋转
function motor_roll_front_right() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 0)
}

//  后轮左旋转
function motor_roll_rear_left() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
}

//  后轮右旋转
function motor_roll_rear_right() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
}

//  左漂移
function motor_drift_left() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 50, SuperBit.enMotors.M3, 50)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
}

//  右漂移
function motor_drift_right() {
    SuperBit.MotorRunDual(SuperBit.enMotors.M1, 50, SuperBit.enMotors.M3, 50)
    SuperBit.MotorRunDual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
}

//  语音播报传感器初始化配置
function sensor_speech_config() {
    Speech.Set_IICAddress(Speech.I2C_ADDR_Select.NEW_ADDR)
    //  设置期间I2C地址为30h
    Speech.SetIntonation(5)
    //  设置语调为5
    Speech.SetSpeed(5)
    //  设置语速为5
    Speech.SetVolume(10)
    //  设置音量为10
    Speech.SetStyle(Speech.Style_Type.Style_Continue)
    //  设置合成风格为连续
    Speech.SetLanguage(Speech.Language_Type.Language_Auto)
    //  自动识别中英文
    Speech.SetRhythm(Speech.Rhythm_Type.Rhythm_Enable)
    //  设置韵律
    Speech.SetReader(Speech.Reader_Type.Reader_XiaoYan)
    //  设置发音人
    Speech.SetNumberHandle(Speech.NumberHandle_Type.NumberHandle_Auto)
    //  设置数字处理策略
    Speech.SetNamePronunciation(Speech.NamePronunciation_Type.NamePronunciation_Auto)
    //  设置姓名读音策略
    Speech.SetSpell(Speech.Spell_Type.Spell_Enable)
    //  设置汉语识别策略
    Speech.SetOnePronunciation(Speech.OnePronunciation_Type.OnePronunciation_Yao)
}

//  汉语拼音识别设置为识别汉语拼音+1位数字声调
//  主循环
sensor_speech_config()
basic.forever(function main_task() {
    let direction: number;
    let distance = CrocoKit_Sensor.V2RGBUL(DigitalPin.P1)
    //  读取超声波传感器距离值
    basic.showNumber(distance)
    //  阻塞函数 显示距离值
    //  Speech.Speech_Text("ju4li2" + convert_to_text(distance))                    # 设置语音播报文本
    //  Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)              # 设置语音等待空闲回传
    if (direction == 0) {
        motor_move_forward()
        if (distance < 100) {
            direction = 1
        }
        
    } else if (direction == 1) {
        motor_roll_left()
        pause(900)
        direction = 0
    }
    
})
