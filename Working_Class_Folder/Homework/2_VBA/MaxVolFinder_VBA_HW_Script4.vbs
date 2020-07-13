

Sub Max_Vol_Finder():

Dim total As Double

Application.ScreenUpdating = False

total = 0

target_range = ActiveSheet.UsedRange.rows.Count

For i = 2 To target_range

'' I set the total to the first cell in total stock volume, then compared it to zero
'' if the cell value was larger it would replace the zero
'' as it progresses, the total will be left with the highest number in the
'' range

 total2 = Cells(i, 12).Value
    
    If total2 > total Then
        total = total2
        Cells(4, 16).Value = total
        Cells(4, 15).Value = Cells(i, 1).Value
    Else
        total = total
        
    End If
    
Next i

Application.ScreenUpdating = True

End Sub
