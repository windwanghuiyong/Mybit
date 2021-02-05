distance = 0
direction = 0

# 前进
def motor_move_forward():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, 255)
# 后退
def motor_move_backward():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, -255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, -255)
# 左平移
def motor_move_left():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
# 右平移
def motor_move_right():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)

# 左前方
def motor_move_left_forard():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, 0)
# 左后方
def motor_move_left_backward():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 0)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, -255)
# 右前方
def motor_move_right_forard():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 0)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 255)
# 右后方
def motor_move_right_backward():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, -255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 0)

# 左转
def motor_roll_left():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
# 右转
def motor_roll_right():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
# 前轮左旋转
def motor_roll_front_left():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 0)
# 前轮右旋转
def motor_roll_front_right():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 0)
# 后轮左旋转
def motor_roll_rear_left():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)
# 后轮右旋转
def motor_roll_rear_right():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
# 左漂移
def motor_drift_left():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 50, SuperBit.enMotors.M3, 50)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, -255)
# 右漂移
def motor_drift_right():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 50, SuperBit.enMotors.M3, 50)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, -255, SuperBit.enMotors.M4, 255)

# 语音播报传感器初始化配置
def sensor_speech_config():
    Speech.Set_IICAddress(Speech.I2C_ADDR_Select.NEW_ADDR)                              # 设置期间I2C地址为30h
    Speech.set_intonation(5)                                                            # 设置语调为5
    Speech.set_speed(5)                                                                 # 设置语速为5
    Speech.set_volume(10)                                                               # 设置音量为10
    Speech.set_style(Speech.Style_Type.STYLE_CONTINUE)                                  # 设置合成风格为连续
    Speech.set_language(Speech.Language_Type.LANGUAGE_AUTO)                             # 自动识别中英文
    Speech.set_rhythm(Speech.Rhythm_Type.RHYTHM_ENABLE)                                 # 设置韵律
    Speech.set_reader(Speech.Reader_Type.READER_XIAOYAN)                                # 设置发音人
    Speech.set_number_handle(Speech.NumberHandle_Type.NUMBERHANDLE_AUTO)                # 设置数字处理策略
    Speech.set_name_pronunciation(Speech.NamePronunciation_Type.NAMEPRONUNCIATION_AUTO) # 设置姓名读音策略
    Speech.set_spell(Speech.Spell_Type.SPELL_ENABLE)                                    # 设置汉语识别策略
    Speech.set_one_pronunciation(Speech.OnePronunciation_Type.ONEPRONUNCIATION_YAO)     # 汉语拼音识别设置为识别汉语拼音+1位数字声调
    
# 主循环
def main_task():
    distance = CrocoKit_Sensor.V2RGBUL(DigitalPin.P1)   # 读取超声波传感器距离值
    basic.show_number(distance)     # 阻塞函数 显示距离值
    # Speech.Speech_Text("ju4li2" + convert_to_text(distance))                    # 设置语音播报文本
    # Speech.Wait_XFS_Status(Speech.ChipStatus_Type.CHIPSTATUS_IDLE)              # 设置语音等待空闲回传
    
    if (direction == 0):
        motor_move_forward()
        if (distance < 100):
            direction = 1
    elif (direction == 1):
        motor_roll_left()
        pause(900)
        direction = 0

sensor_speech_config()
basic.forever(main_task)