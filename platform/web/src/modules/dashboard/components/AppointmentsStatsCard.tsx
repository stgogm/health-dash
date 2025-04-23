import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts'
import type { AppointmentsStats } from '@common/types'
import { Chart, useChart } from '@chakra-ui/charts'
import { Card } from '@chakra-ui/react'

interface Props {
  appointmentsStats: AppointmentsStats
}

export const AppointmentsStatsCard = ({ appointmentsStats }: Props) => {
  const chart = useChart({
    data: [
      { name: 'Scheduled', value: appointmentsStats.scheduled, color: 'teal' },
      { name: 'Completed', value: appointmentsStats.completed, color: 'green' },
      { name: 'Cancelled', value: appointmentsStats.cancelled, color: 'red' },
    ],
  })

  const total =
    appointmentsStats.scheduled +
    appointmentsStats.completed +
    appointmentsStats.cancelled

  return (
    <Card.Root variant="elevated">
      <Card.Body>
        <Chart.Root chart={chart} boxSize="20em" mx="auto">
          <PieChart margin={{ left: 40 }}>
            <Tooltip content={<Chart.Tooltip hideLabel />} />
            <Pie
              dataKey={chart.key('value')}
              outerRadius={100}
              data={chart.data}
              paddingAngle={8}
              cornerRadius={4}
              innerRadius={80}
              labelLine={false}
              label={{
                fill: chart.color('text'),
              }}
            >
              <Label
                content={({ viewBox }) => (
                  <Chart.RadialText
                    description="Appointments"
                    viewBox={viewBox}
                    title={total}
                  />
                )}
              />
              {chart.data.map((item) => (
                <Cell
                  fill={chart.color(item.color)}
                  key={item.name}
                  strokeWidth={2}
                />
              ))}
            </Pie>
          </PieChart>
        </Chart.Root>
      </Card.Body>
    </Card.Root>
  )
}
