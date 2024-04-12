import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import generalStyles from '/src/GeneralStyle.module.css';

interface Props {
    control: any
    name: string;
    disabled?: boolean
}
const Calendar = ({control, name, disabled}: Props) => {
    return   <Controller
                control={control}
                name={name as `${string}`}
                render={({field})=> (<DatePicker disabled={disabled} dateFormat="dd/MM/yyyy"  wrapperClassName={generalStyles['date-picker'] + ' '} selected={field.value} onChange={(date) => field.onChange(date!) }></DatePicker>) }
            />
}

export default Calendar;