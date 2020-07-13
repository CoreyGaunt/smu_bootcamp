

Sub Max_Percent_Finder():

Dim max As Double

Application.ScreenUpdating = False

max = 0

target_range = ActiveSheet.UsedRange.rows.Count

For i = 2 To target_range

'' I set the max to the first cell in percent changed, then compared it to zero
'' if the cell value was larger it would replace the zero
'' as it progresses, the max will be left with the highest number in the
'' range

    max1 = Cells(i, 11).Value
        
    If max1 > max Then
        max = max1
        Cells(2, 16).Value = FormatPercent(max, [2])
        Cells(2, 15).Value = Cells(i, 1).Value
    Else
        max = max
    End If

Next i
    
Application.ScreenUpdating = True

End Sub
