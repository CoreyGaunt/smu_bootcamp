Sub StockAnalysis():
Dim xSh As Worksheet
Application.ScreenUpdating = False
    
For Each xSh In Worksheets
    xSh.Select
    Call StockTracker2
        Call Max_Percent_Finder2
            Call Min_Percent_Finder2
                Call Max_Vol_Finder2
Next
Application.ScreenUpdating = True
End Sub



Sub StockTracker2():

'' created variables to use in my script

Dim yearly_change As Double
Dim percent As Double
Dim total_vol As Double
Dim target_range

'' Added this bit in here, and set it to True after my last Next in order for my macro to run faster

Application.ScreenUpdating = False

'' Set range variables - I have done this so I do not have to worry
'' about row count in the spreadsheet

'' *NOTE* - This below section is NOT currently functioning properly - the target range
'' will not reset when moving to a new activesheet - currently sets properly for Sheet("2016")
'' but does not adjust for Sheets("2015","2014")


'' additional attempt to get around this bug, to no avail
'' target_range = sSheet.Range("K2", Cells(rows.Count, "K").End(xlUp))

target_range = Cells(Rows.Count, 1).End(xlUp).Row

'' The code below is used to Title the spreadsheet with our new
'' Columns

Cells(1, 9).Value = "Ticker"
Cells(1, 10).Value = "Yearly Change"
Cells(1, 11).Value = "Percent Change"
Cells(1, 12).Value = "Total Stock Volume"
Cells(2, 14).Value = "Greatest % Increase"
Cells(3, 14).Value = "Greatest % Decrease"
Cells(4, 14).Value = "Greatest Total Volume"
Cells(1, 15).Value = "Ticker"
Cells(1, 16).Value = "Value"

'' Range for specific document
'' I have set it as 2 to target_range so that I will never have to
'' adjust the range to match the sheet - it will simply conform
'' to the sheet it is using!

    For i = 2 To target_range

    '' The below variables take place for basic formulas
    ''
    '' track ticker name, change in a year, percent difference, and
    '' total volume
    
        ticker = Cells(i, 1).Value
        yearly_change = Cells(i, 3).Value - Cells(i, 6).Value
        percent = (yearly_change / Cells(i, 3).Value)
        total_vol = Cells(i, 6).Value * Cells(i, 7).Value

    '' The below lines place the values calculated in the above
    '' block into the worksheet
    '' This will populate our Ticker, Yearly Changed, Percent Changed
    '' and Total Stock Volume columns
    
        Cells(i, 9).Value = Cells(i, 1).Value
        Cells(i, 10).Value = yearly_change
        Cells(i, 11).Value = FormatPercent(percent, [2])
        Cells(i, 12).Value = total_vol
    
    '' This section is used to handle conditionally formatting
    '' Color Index for Green = 4
    '' Color Index for Red = 3
    
        If Cells(i, 11).Value >= 0 Then
    
            Cells(i, 11).Interior.ColorIndex = 4
        
        Else
    
            Cells(i, 11).Interior.ColorIndex = 3
        
        End If

    Next i
    
Application.ScreenUpdating = True

End Sub

Sub Max_Percent_Finder2():

Dim max As Double
Dim target_range As Long

Application.ScreenUpdating = False

max = 0

target_range = Cells(Rows.Count, 1).End(xlUp).Row

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

Sub Min_Percent_Finder2():

Dim min As Double

Application.ScreenUpdating = False

min = 0

target_range = Cells(Rows.Count, 1).End(xlUp).Row

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

Sub Max_Vol_Finder2():

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
