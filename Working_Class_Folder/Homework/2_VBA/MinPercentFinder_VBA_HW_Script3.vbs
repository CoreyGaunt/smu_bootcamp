Sub Min_Percent_Finder():

Dim min As Double

Application.ScreenUpdating = False

min = 0

target_range = ActiveSheet.UsedRange.rows.Count

For i = 2 To target_range

'' I set the min to the first cell in percent changed, then compared it to zero
'' if the cell value was smaller it would replace the zero
'' as it progresses, the min will be left with the lowest number in the
'' range

 min1 = Cells(i, 11).Value
    
    If min1 < min Then
        min = min1
        Cells(3, 16).Value = FormatPercent(min, [2])
        Cells(3, 15).Value = Cells(i, 1).Value
    Else
        min = min
        
    End If
    
Next i

Application.ScreenUpdating = True

End Sub